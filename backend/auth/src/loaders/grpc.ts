import * as grpc from "grpc";

import { IAuthServer, AuthService } from "../grpc/generated/auth_grpc_pb";
import { AuthServer } from "../grpc/server/auth/auth";
import envConfig from "../config/env";

type StartServerType = () => void;

const startServer: StartServerType = (): void => {
  // create a new gRPC server
  const server = new grpc.Server();
  // add every service to grpc server
  server.addService<IAuthServer>(AuthService, new AuthServer());

  server.bind(
    `localhost:${envConfig.grpcPort}`,
    grpc.ServerCredentials.createInsecure()
  );
  server.start();
};

export default startServer;
