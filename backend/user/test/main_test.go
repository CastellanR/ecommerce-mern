package main_test

import (
	"testing"
	"os"
	"net/http/httptest"
	logger "github.com/sirupsen/logrus"
	"fmt"
	
	"../src/config"
	routes "../src/routes"
)

var envConfig config.Enviroment
var DB *config.DB

func TestMain(m *testing.M) {

	//Load env configuration
	envConfig = config.LoadEnv()
	// Load database
	DB = config.InitDB()
	// Start new server running the router with the database 
	testServer := httptest.NewServer(routes.SetupRouter(DB))	 
	// Start running other test cases
	exitVal := m.Run()
	//Sanitize DB
	_, err := DB.Exec(`DELETE FROM "user" WHERE email=$1`, mockUser.Email)

	if err != nil {
    logger.Error(fmt.Sprintf("Expected no error, got %v", err))
	}
	
	testServer.Close()

  os.Exit(exitVal)
}