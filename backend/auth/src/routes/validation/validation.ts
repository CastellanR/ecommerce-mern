import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";

const validation = (schema: Joi.Schema, property: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync((<any>req)[property]);
      next();
    } catch (error) {
      const { details } = error;
      const message = details.map((i: Error) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  };
};

export default validation;
