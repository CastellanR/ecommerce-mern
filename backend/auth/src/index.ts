import "reflect-metadata";

import express from "express";

import config from "./config/env";
import Logger from "./loaders/logger";

export const app = express();

async function startServer() {
  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, (err: any) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(
      `[auth][${process.env.NODE_ENV}] Auth is running on PORT ${config.port}`
    );
    app.emit("appStarted"); // When is ready, emit an event "appStarted" to all listeners registered
  });
}

startServer();
