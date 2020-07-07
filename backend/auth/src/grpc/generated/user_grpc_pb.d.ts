// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserService_IcreateUser;
    getUserByEmail: IUserService_IgetUserByEmail;
    activateUser: IUserService_IactivateUser;
    deleteUserByCondition: IUserService_IdeleteUserByCondition;
}

interface IUserService_IcreateUser extends grpc.MethodDefinition<user_pb.CreateUserRequest, user_pb.CreateUserResponse> {
    path: string; // "/user.User/createUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.CreateUserResponse>;
}
interface IUserService_IgetUserByEmail extends grpc.MethodDefinition<user_pb.GetUserByEmailRequest, user_pb.GetUserByEmailResponse> {
    path: string; // "/user.User/getUserByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.GetUserByEmailRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserByEmailRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserByEmailResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserByEmailResponse>;
}
interface IUserService_IactivateUser extends grpc.MethodDefinition<user_pb.ActivateUserRequest, user_pb.ActivateUserResponse> {
    path: string; // "/user.User/activateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.ActivateUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ActivateUserRequest>;
    responseSerialize: grpc.serialize<user_pb.ActivateUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ActivateUserResponse>;
}
interface IUserService_IdeleteUserByCondition extends grpc.MethodDefinition<user_pb.DeleteUserByConditionRequest, user_pb.DeleteUserByConditionResponse> {
    path: string; // "/user.User/deleteUserByCondition"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.DeleteUserByConditionRequest>;
    requestDeserialize: grpc.deserialize<user_pb.DeleteUserByConditionRequest>;
    responseSerialize: grpc.serialize<user_pb.DeleteUserByConditionResponse>;
    responseDeserialize: grpc.deserialize<user_pb.DeleteUserByConditionResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    createUser: grpc.handleUnaryCall<user_pb.CreateUserRequest, user_pb.CreateUserResponse>;
    getUserByEmail: grpc.handleUnaryCall<user_pb.GetUserByEmailRequest, user_pb.GetUserByEmailResponse>;
    activateUser: grpc.handleUnaryCall<user_pb.ActivateUserRequest, user_pb.ActivateUserResponse>;
    deleteUserByCondition: grpc.handleUnaryCall<user_pb.DeleteUserByConditionRequest, user_pb.DeleteUserByConditionResponse>;
}

export interface IUserClient {
    createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: user_pb.GetUserByEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: user_pb.GetUserByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: user_pb.GetUserByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    activateUser(request: user_pb.ActivateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    activateUser(request: user_pb.ActivateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    activateUser(request: user_pb.ActivateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
    deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
    deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: user_pb.GetUserByEmailRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: user_pb.GetUserByEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: user_pb.GetUserByEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserByEmailResponse) => void): grpc.ClientUnaryCall;
    public activateUser(request: user_pb.ActivateUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    public activateUser(request: user_pb.ActivateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    public activateUser(request: user_pb.ActivateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ActivateUserResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
    public deleteUserByCondition(request: user_pb.DeleteUserByConditionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.DeleteUserByConditionResponse) => void): grpc.ClientUnaryCall;
}
