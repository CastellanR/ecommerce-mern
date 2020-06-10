package grpc

import (
    "net"
    "fmt"
	logger "github.com/sirupsen/logrus"
    "google.golang.org/grpc"

		user "./server/user"
		config "../config"
)

// StartGRPCServer run the server
func StartGRPCServer() {
		grpcPort := config.GetEnvConfig().GrpcPort
    l, err := net.Listen("tcp", fmt.Sprintf(":%d",grpcPort))
    
    if err != nil {
      logger.Fatal(err)
    }

    userServer := user.GRPCServer{}
    // Create new gRPC server instance
    server := grpc.NewServer()

    // Register gRPC server
		user.RegisterUserServer(server, &userServer)
		
		logger.Info(fmt.Sprintf("User grpc server running on :%d", grpcPort))

    // Start gRPC server
    if err := server.Serve(l); err != nil {
    	logger.Fatal(err)
    }
}