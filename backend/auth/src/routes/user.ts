import { Router, Request, Response, NextFunction, response } from "express";
import { Container } from "typedi";
import passport from "passport";

import validation from "./validation/validation";
import UserService from "../services/user/user";
import { registerSchema, loginSchema } from "./validation/schema";
import Logger from "../loaders/logger";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);
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
              return res.status(400).json({ code: 400, message: info });
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
};
