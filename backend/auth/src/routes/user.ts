import { Router, Request, Response, NextFunction, response } from "express";
import { Container } from "typedi";
import passport from "passport";

import validation from "./validation/validation";
import UserService from "../services/user/user";
import { registerSchema, loginSchema } from "./validation/schema";

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
          'local',
          { session: false },
          async (err, passportUser, info) => {
            if (err) return res.status(500).json(err);
            if (!passportUser) return res.status(400).json(info);
            req.passportUser = passportUser;
            next();
          }
        )(req, res, next);
      } catch (error) {
        console.log(error);
      }
    },
    async (req: Request, res: Response) => {
      let loginDTO = req.body;
      loginDTO.id = req.passportUser.id;

      const userServiceInstance = Container.get(UserService); // Service locator

      const response = await userServiceInstance.LoginUser(loginDTO);

      return res.status(response.code).json(response);
    }
  );
};
