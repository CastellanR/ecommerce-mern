// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as auth_pb from "./auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    validateUser: IAuthService_IvalidateUser;
}

interface IAuthService_IvalidateUser extends grpc.MethodDefinition<auth_pb.ValidateUserRequest, auth_pb.ValidateUserResponse> {
    path: string; // "/auth.Auth/validateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<auth_pb.ValidateUserRequest>;
    requestDeserialize: grpc.deserialize<auth_pb.ValidateUserRequest>;
    responseSerialize: grpc.serialize<auth_pb.ValidateUserResponse>;
    responseDeserialize: grpc.deserialize<auth_pb.ValidateUserResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer {
    validateUser: grpc.handleUnaryCall<auth_pb.ValidateUserRequest, auth_pb.ValidateUserResponse>;
}

export interface IAuthClient {
    validateUser(request: auth_pb.ValidateUserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: auth_pb.ValidateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
    validateUser(request: auth_pb.ValidateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public validateUser(request: auth_pb.ValidateUserRequest, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: auth_pb.ValidateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
    public validateUser(request: auth_pb.ValidateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.ValidateUserResponse) => void): grpc.ClientUnaryCall;
}
