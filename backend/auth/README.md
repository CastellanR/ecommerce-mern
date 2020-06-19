# Auth microservice

Provides all the users information to the frontend and others microservices.

## Technologies

* Typescript
* Express
* MongoDB
* Bunyan
* Jest
* gRPC

## Command to generate proto buffers (execute inside proto folder)

 protoc --plugin=protoc-gen-ts=../../../../node_modules/.bin/protoc-gen-ts --plugin=protoc-gen-grpc=../../../../node_modules/.bin/grpc_tools_node_protoc_plugin --js_out=import_style=commonjs,binary:../../generated --ts_out=service=grpc-node:../../generated --grpc_out=../../generated ./user.proto
 