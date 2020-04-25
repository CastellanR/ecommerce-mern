import morgan from "morgan";
import express from "express";

import routes from "./routes/index";
import config from "./config/env";
import ("./config/db");

export let app = express();

//DB Connection

//Middlewares
app.use(morgan("dev")); //Show on terminal API requests
app.use(express.json());

//Routes
app.use("/api/security", routes);

app.listen(config.port, () => {
  console.log(
    `[security][${process.env.NODE_ENV}] Security is running on PORT ${config.port}`
  );
});