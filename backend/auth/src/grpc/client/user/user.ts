import * as grpc from "grpc";

import Logger from '../../../loaders/logger';
import config from "../../../config/env";

import { CreateUserRequest, CreateUserResponse } from "../../generated/user_pb";
import { UserClient } from "../../generated/user_grpc_pb";

const createUser = async (): Promise<void> => {
  var client = new UserClient(
    config.grpcUser,
    grpc.credentials.createInsecure()
  );
  var request = new CreateUserRequest();
  request.setToken("token");
  client.createUser(request, (err: Error, response: CreateUserResponse) =>{
    try{
      Logger.info("Greeting:", response.getStatus());
    }catch(e){
      Logger.error("asda"+e)
    }
  });
};

export default createUser;

