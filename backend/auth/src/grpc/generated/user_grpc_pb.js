// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type user.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserByEmailRequest(arg) {
  if (!(arg instanceof user_pb.GetUserByEmailRequest)) {
    throw new Error('Expected argument of type user.GetUserByEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByEmailRequest(buffer_arg) {
  return user_pb.GetUserByEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserByEmailResponse(arg) {
  if (!(arg instanceof user_pb.GetUserByEmailResponse)) {
    throw new Error('Expected argument of type user.GetUserByEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserByEmailResponse(buffer_arg) {
  return user_pb.GetUserByEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  createUser: {
    path: '/user.User/createUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_user_CreateUserRequest,
    requestDeserialize: deserialize_user_CreateUserRequest,
    responseSerialize: serialize_user_CreateUserResponse,
    responseDeserialize: deserialize_user_CreateUserResponse,
  },
  getUserByEmail: {
    path: '/user.User/getUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserByEmailRequest,
    responseType: user_pb.GetUserByEmailResponse,
    requestSerialize: serialize_user_GetUserByEmailRequest,
    requestDeserialize: deserialize_user_GetUserByEmailRequest,
    responseSerialize: serialize_user_GetUserByEmailResponse,
    responseDeserialize: deserialize_user_GetUserByEmailResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
