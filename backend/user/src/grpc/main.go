package grpc

import (
    "net"
	logger "github.com/sirupsen/logrus"
    "google.golang.org/grpc"

    "./server/user"
)

// StartGRPCServer run the server
func StartGRPCServer() {
    // Create new gRPC server instance
    s := grpc.NewServer()
    srv := &user.GRPCServer{}

    // Register gRPC server
    user.RegisterUserServer(s, srv)

    // Listen on port 8080
    l, err := net.Listen("tcp", ":6001")
	logger.Info("User grpc server runned!")

    if err != nil {
        logger.Fatal(err)
    }

    // Start gRPC server
    if err := s.Serve(l); err != nil {
        logger.Fatal(err)
    }
}