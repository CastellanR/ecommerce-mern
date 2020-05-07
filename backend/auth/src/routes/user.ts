import { Router, Request, Response } from "express";
import { Container } from 'typedi';

// import middlewares from '../middlewares';
import UserService from "../services/user/user";

const route = Router();

export default (app: Router) => {
  app.use('/users', route);
  //Register User
  route.post(
    "/register",
    /*auth.optional,*/ async (req, res, next) => {
      const userDTO = req.body;

      const userServiceInstance = Container.get(UserService); // Service locator

      const response = userServiceInstance.RegisterUser(userDTO);

      return res.json(response);
    }
  );
};
