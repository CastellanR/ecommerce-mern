
package main

import (
	"fmt"
	logger "github.com/sirupsen/logrus"
	config "./config"
	routes "./routes"
)

func main() {
	// Loading enviroment variables
	exportConfig := config.LoadEnv()
	// Creating a connection to the database
	config.InitDB()

	// Routes 
	router := routes.SetupRouter()

	// Start serving the application
	logger.Info("User microservice runned!")
	router.Run(fmt.Sprintf(":%v",exportConfig.Port))
}