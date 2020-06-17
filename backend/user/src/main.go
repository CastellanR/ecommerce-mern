
package main

import (
	"fmt"

	config "./config"
	"./grpc"
	routes "./routes"
)

func main() {
	// Loading enviroment variables
	exportConfig := config.LoadEnv()

	// Creating a connection to the database
	db := config.InitDB()

	//Start gRPCServer
	go grpc.StartGRPCServer(db)
	// Routes 
	router := routes.SetupRouter(db)

	// Start serving the application
	router.Run(fmt.Sprintf(":%v",exportConfig.Port))

	defer db.Close()
}