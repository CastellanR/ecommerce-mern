import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";

import validation from "./validation/validation";
import UserService from "../services/user/user";
import { registerSchema } from "./validation/schema";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);
  route.post(
    "/register",
    validation(registerSchema, "body"),
    async (req: Request, res: Response, next: NextFunction) => {
      const userDTO = req.body;

      const userServiceInstance = Container.get(UserService); // Service locator

      const response = await userServiceInstance.RegisterUser(userDTO);

      return res.status(response.code).json(response);
    }
  );
};
