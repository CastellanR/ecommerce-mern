import jwt from "express-jwt";
import { Request } from "express";

import config from "./env";

const getTokenFromHeaders = (req: Request) => {
  const {
    headers: { authorization },
  } = req;
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    const token = authorization.split(" ")[1];
    return token;
  }
  return null;
};

const auth = {
  required: jwt({
    secret: config.secretJWT,
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: config.secretJWT,
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

export default auth;
