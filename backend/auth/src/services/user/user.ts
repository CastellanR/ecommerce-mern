import { IDTOCreateUser, IDTOLoginUser } from "../../interfaces/IUser";
import createUser from "../../grpc/client/user/user";
import Logger from "../../loaders/logger";
import BCrypt from "../../config/bcrypt";

import Session from "../../models/Session";
import SessionState from "../../models/SessionState";

export default class UserService {
  async RegisterUser(
    dtoCreateUser: IDTOCreateUser
  ): Promise<{ code: number; message: string }> {
    try {
      dtoCreateUser.password = await BCrypt.hashPassword(
        dtoCreateUser.password
      );
    } catch (error) {
      Logger.error(error);
      return { code: 500, message: error };
    }

    let idUser: String;

    try {
      idUser = await createUser(dtoCreateUser);
    } catch (error) {
      return { code: error.code, message: error.message };
    }

    let sessionState;

    try {
      sessionState = await SessionState.findOne({
        name: "Created",
        deletedAt: null,
      });
    } catch (error) {
      return { code: 400, message: "Session state Created not found!" };
    }

    try {
      const newSession = new Session({
        userId: idUser,
        deviceName: dtoCreateUser.deviceName,
        agent: dtoCreateUser.agent,
        idSessionState: sessionState._id,
        createdAt: new Date(),
      });

      await newSession.save();
    } catch (error) {
      //TODO Add deleteUser logic to handle error
      return {
        code: 500,
        message: error,
      };
    }

    //TODO Add rabbitmq logic

    return {
      code: 201,
      message: "Please check your email to activate the account!",
    };
  }

  async LoginUser(
    dtoLoginUser: IDTOLoginUser
  ): Promise<{ code: number; message: string }> {

    
    /*dtoCreateUser.password = await BCrypt.hashPassword(
        dtoCreateUser.password
      );
    } catch (error) {
      Logger.error(error);
      return { code: 500, message: error };
    }

    let idUser: String;

    try {
      idUser = await createUser(dtoCreateUser);
    } catch (error) {
      return { code: error.code, message: error.message };
    }

    let sessionState;

    try {
      sessionState = await SessionState.findOne({
        name: "Created",
        deletedAt: null,
      });
    } catch (error) {
      return { code: 400, message: "Session state Created not found!" };
    }

    try {
      const newSession = new Session({
        userId: idUser,
        deviceName: dtoCreateUser.deviceName,
        agent: dtoCreateUser.agent,
        idSessionState: sessionState._id,
        createdAt: new Date(),
      });

      await newSession.save();
    } catch (error) {
      //TODO Add deleteUser logic to handle error
      return {
        code: 500,
        message: error,
      };
    }*/

    //TODO Add rabbitmq logic

    return {
      code: 200,
      message: "Please check your email to activate the account!",
    };
  }
}
