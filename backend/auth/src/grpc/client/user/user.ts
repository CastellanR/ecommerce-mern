import * as grpc from "grpc";

import config from "../../../config/env";
import { newError } from "../../../errors/error";

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserByEmailRequest,
  GetUserByEmailResponse,
} from "../../generated/user_pb";
import { UserClient } from "../../generated/user_grpc_pb";

import { IDTOCreateUser, IGetUserByEmail } from "../../../interfaces/IUser";

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
}: IDTOCreateUser): Promise<string> => {
  let client = new UserClient(
    config.grpcUser,
    grpc.credentials.createInsecure()
  );
  let request = new CreateUserRequest();
  let id: string;

  request.setFirstname(firstName);
  request.setLastname(lastName);
  request.setEmail(email);
  request.setPassword(password);

  return new Promise((resolve, reject) =>
    client.createUser(request, (err: Error, response: CreateUserResponse) => {
      if (err) {
        reject(newError(err));
      } else {
        id = response.getId();
        resolve(id);
      }
    })
  );
};

export const getUserByEmail = async (
  email: string
): Promise<IGetUserByEmail> => {
  let client = new UserClient(
    config.grpcUser,
    grpc.credentials.createInsecure()
  );
  let request = new GetUserByEmailRequest();
  let dtoUser: IGetUserByEmail = { id: 0, email: "", password: "" };
  request.setEmail(email);

  return new Promise((resolve, reject) =>
    client.getUserByEmail(
      request,
      (err: Error, response: GetUserByEmailResponse) => {
        if (err) {
          reject(newError(err));
        } else {
          dtoUser.id = response.getId();
          dtoUser.email = response.getEmail();
          dtoUser.password = response.getPassword();
          resolve(dtoUser);
        }
      }
    )
  );
};
