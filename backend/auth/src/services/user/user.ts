import jwt from "jsonwebtoken";
import {
  IDTOCreateUser,
  IDTOLoginUser,
  IDTOLoginResponse,
} from "../../interfaces/IUser";
import { createUser } from "../../grpc/client/user/user";
import Logger from "../../loaders/logger";
import BCrypt from "../../config/bcrypt";
import { encrypt, decrypt } from "../../helpers/crypto";

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
      return error.code === 14
        ? { code: 503, message: "User microservice down" }
        : { code: error.code, message: error.message };
    }
    //TODO Add rabbitmq logic

    return {
      code: 201,
      message: "Please check your email to activate the account!",
    };
  }

  async LoginUser(
    dtoLoginUser: IDTOLoginUser
  ): Promise<{ code: number; message: IDTOLoginResponse | string }> {
    try {
      const session = await Session.findOne({
        idUser: dtoLoginUser.id,
        deviceName: dtoLoginUser.deviceName,
        agent: dtoLoginUser.agent,
        deletedAt: null,
      });

      const sessionState = await SessionState.findOne({
        name: "Active",
        deletedAt: null,
      });

      if (!sessionState) {
        return { code: 500, message: "There is no active session" };
      }

      const response: IDTOLoginResponse = await new Promise((resolve, reject) =>
        jwt.sign(
          { idUser: dtoLoginUser.id },
          "secret",
          {
            expiresIn: dtoLoginUser.keepSessionActive === true ? "180d" : "1d",
          },
          async (err, token) => {
            if (err) {
              Logger.error(err);
              reject(err);
            }
            // TODO Add role info query to add to token later

            const idUserEncrypted = encrypt(dtoLoginUser.id);
            const user = {
              id: idUserEncrypted,
              email: dtoLoginUser.email,
              token: `Bearer ${token}`,
            };

            let date = new Date();

            if (session) {
              await Session.findOneAndUpdate(
                {
                  _id: session._id,
                },
                {
                  idSessionState: sessionState._id,
                  token: token,
                  updatedAt: date,
                },
                {
                  //@ts-ignore
                  useFindAndModify: false,
                }
              );
            } else {
              const newSession = new Session({
                idUser: dtoLoginUser.id,
                deviceName: dtoLoginUser.deviceName,
                agent: dtoLoginUser.agent,
                idSessionState: sessionState._id,
                token: token,
                createdAt: date,
              });

              await newSession.save();
            }
            resolve(user);
          }
        )
      );
      return { code: 200, message: response };
    } catch (error) {
      Logger.error(error);
      return { code: 500, message: error };
    }
  }

  async LogoutUser(token: string): Promise<{ code: number; message: string }> {
    if (!token) return { code: 200, message: "User logged out!" };

    const sessionState = await SessionState.findOne({
      name: "Closed",
      deletedAt: null,
    });

    if (!sessionState) {
      return { code: 500, message: "There is no active session" };
    }
    try {
      await Session.findOneAndUpdate(
        {
          token: token.replace("Bearer ",""),
        },
        {
          idSessionState: sessionState._id,
          token: null,
          updatedAt: new Date(),
        },
        {
          //@ts-ignore
          useFindAndModify: false,
        }
      );
    } catch (error) {
      return { code: 500, message: error.message };
    }

    return {
      code: 200,
      message: "User logged out!",
    };
  }
}
