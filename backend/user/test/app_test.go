package main_test

import (
	"net/http"
	"testing"
	"fmt"
)

func ServiceStatus(t *testing.T) {
	
  response, error := http.Get(fmt.Sprintf("http://%s:%v%s/status", envConfig.Host, envConfig.Port, envConfig.APIPrefix))

  if error != nil {
    t.Fatalf("Expected no error, got %v", error)
  }

  if response.StatusCode != 200 {
    t.Fatalf("Expected status code 200, got %v", response.StatusCode)
  }
}

