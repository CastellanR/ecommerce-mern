import { Router, Request, Response, NextFunction, response } from "express";
import { Container } from "typedi";
import passport from "passport";

import validation from "./validation/validation";
import auth from "../config/auth";
import UserService from "../services/user/user";
import { registerSchema, loginSchema } from "./validation/schema";
import Logger from "../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  //Catch user not authenticated or token invalid error
  app.use(function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (err) {
      res
        .status(401)
        .send({
          code: 401,
          message:
            err.message === "No authorization token was found"
              ? "Token missing"
              : "Token expired",
        });
    }
  });

  route.post(
    "/register",
    validation(registerSchema, "body"),
    async (req: Request, res: Response) => {
      const userDTO = req.body;

      const userServiceInstance = Container.get(UserService); // Service locator

      const response = await userServiceInstance.RegisterUser(userDTO);

      return res.status(response.code).json(response);
    }
  );

  route.post(
    "/login",
    validation(loginSchema, "body"),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await passport.authenticate(
          "local",
          { session: false },
          async (info, passportUser, err) => {
            if (err) {
              Logger.error(err);
              return res.status(500).json({ code: 500, message: err.message });
            }
            if (!passportUser) {
              const code = info.includes("down")
                ? 503
                : info.includes("Confirm")
                ? 401
                : 400;
              return res.status(code).json({
                code: code,
                message: info,
              });
            }
            req.passportUser = passportUser;
            next();
          }
        )(req, res, next);
      } catch (error) {
        Logger.error(error);
      }
    },
    async (req: Request, res: Response) => {
      let loginDTO = req.body;
      loginDTO.id = req.passportUser.id;

      const userServiceInstance = Container.get(UserService); // Service locator
      try {
        const response = await userServiceInstance.LoginUser(loginDTO);
        return res.status(response.code).json(response);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  );

  route.post(
    "/logout",
    auth.required,
    async (req: Request, res: Response, next: NextFunction) => {
      const userToken = req.headers.authorization;

      const userServiceInstance = Container.get(UserService); // Service locator

      const response = await userServiceInstance.LogoutUser(userToken);

      return res.status(response.code).json(response);
    }
  );
};
