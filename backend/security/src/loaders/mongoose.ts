import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "../config/env";

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  return connection.connection.db;
};
