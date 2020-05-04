import express from "express";
import { NextFunction, Request, Response } from "express"
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import routes from "../routes";
import config from "../config/env";

export default ({ app }: { app: express.Application }) => {
  // Health Check endpoints
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middlewares
  app.use(morgan("dev")); //Show on terminal API requests

  //Helmet
  app.use(helmet());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Load API routes
  app.use(config.apiPrefix, routes());

  // Catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // Error handlers
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Handle 401 thrown by express-jwt library
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Handle 500
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
