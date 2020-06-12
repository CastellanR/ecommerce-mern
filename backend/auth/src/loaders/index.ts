import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import Logger from "./logger";
import grpcLoader from "./grpc"
import envConfig from "../config/env"


export default async ({ expressApp }: { expressApp: any }) => {
  await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");

  grpcLoader();
  Logger.info(`✌️ Grpc loaded and running on port ${envConfig.grpcPort}`);
};
