import mongoose from "mongoose";

import config from "./env";

mongoose.connect(
  config.mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log(
        `[security][${process.env.NODE_ENV}] Security's DB connected`
      );
    } else {
      console.log("[security] TCL: err", err);
    }
  }
)