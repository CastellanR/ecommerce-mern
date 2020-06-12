import * as grpc from "grpc";

import { IAuthServer } from "../../generated/auth_grpc_pb";
import {
  ValidateUserRequest,
  ValidateUserResponse,
} from "../../generated/auth_pb";

export class AuthServer implements IAuthServer {
  validateUser(
    call: grpc.ServerUnaryCall<ValidateUserRequest>,
    callback: grpc.sendUnaryData<ValidateUserResponse>
  ): void {
    // console.log(`${call.request.getToken()}    getSong`);
    let response = new ValidateUserResponse()
    response.setStatus(true)
    callback(null,response);
  }
}
