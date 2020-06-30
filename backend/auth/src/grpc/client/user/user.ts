import * as grpc from "grpc";

import Logger from "../../../loaders/logger";
import config from "../../../config/env";

import { CreateUserRequest, CreateUserResponse } from "../../generated/user_pb";
import { UserClient } from "../../generated/user_grpc_pb";
import { IDTOCreateUser } from "../../../interfaces/IUser";

const createUser = async ({
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

  await new Promise((resolve, reject) => client.createUser(request, (err: Error, response: CreateUserResponse) => {
    if (err) {
      Logger.error("asda" + err);
      reject(err);
    } else {
      id = response.getId();
      resolve(id)
    }
  }))
  return id
};

export default createUser;
