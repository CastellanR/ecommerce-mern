import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import Logger from "./logger";

export default async ({ expressApp }: { expressApp: any }) => {
  await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");
};
