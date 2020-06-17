# User microservice

Provides all the users information to the frontend and others microservices.

## Technologies

* Go
* Gin-Gonic
* PostgreSQL
* Logrus
* gRPC
* Glide package manager

## Dependencies

* github.com/gin-gonic/gin
* github.com/lib/pq
* github.com/jmoiron/sqlx
* github.com/gofrs/uuid
* github.com/joho/godotenv
* github.com/sirupsen/logrus
* google.golang.org/grpc
* github.com/golang/protobuf/protoc-gen-go
* yaourt -S protobuf-go

## Run the server

go run main.go -- local / test

## Run testing

go test -- test

## Command to generate proto buffers

protoc -I=. --go_out=plugins=grpc:. ./user.proto
