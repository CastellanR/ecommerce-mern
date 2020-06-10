
package main

import (
	"fmt"
	"./grpc"
	config "./config"
	routes "./routes"
)

func main() {
	// Loading enviroment variables
	exportConfig := config.LoadEnv()

	// Creating a connection to the database
	config.InitDB()

	//Start gRPCServer
	go grpc.StartGRPCServer()
	// Routes 
	router := routes.SetupRouter()

	// Start serving the application
	router.Run(fmt.Sprintf(":%v",exportConfig.Port))
}