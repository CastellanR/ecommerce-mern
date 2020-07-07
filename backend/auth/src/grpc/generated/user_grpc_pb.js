// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_user_ActivateUserRequest(arg) {
  if (!(arg instanceof user_pb.ActivateUserRequest)) {
    throw new Error('Expected argument of type user.ActivateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ActivateUserRequest(buffer_arg) {
  return user_pb.ActivateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_ActivateUserResponse(arg) {
  if (!(arg instanceof user_pb.ActivateUserResponse)) {
    throw new Error('Expected argument of type user.ActivateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_ActivateUserResponse(buffer_arg) {
  return user_pb.ActivateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_user_DeleteUserByConditionRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserByConditionRequest)) {
    throw new Error('Expected argument of type user.DeleteUserByConditionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserByConditionRequest(buffer_arg) {
  return user_pb.DeleteUserByConditionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserByConditionResponse(arg) {
  if (!(arg instanceof user_pb.DeleteUserByConditionResponse)) {
    throw new Error('Expected argument of type user.DeleteUserByConditionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserByConditionResponse(buffer_arg) {
  return user_pb.DeleteUserByConditionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  activateUser: {
    path: '/user.User/activateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ActivateUserRequest,
    responseType: user_pb.ActivateUserResponse,
    requestSerialize: serialize_user_ActivateUserRequest,
    requestDeserialize: deserialize_user_ActivateUserRequest,
    responseSerialize: serialize_user_ActivateUserResponse,
    responseDeserialize: deserialize_user_ActivateUserResponse,
  },
  deleteUserByCondition: {
    path: '/user.User/deleteUserByCondition',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserByConditionRequest,
    responseType: user_pb.DeleteUserByConditionResponse,
    requestSerialize: serialize_user_DeleteUserByConditionRequest,
    requestDeserialize: deserialize_user_DeleteUserByConditionRequest,
    responseSerialize: serialize_user_DeleteUserByConditionResponse,
    responseDeserialize: deserialize_user_DeleteUserByConditionResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
