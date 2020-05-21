package main_test

import (
	"net/http"
	"net/http/httptest"
	"testing"
	"fmt"
	routes "../src/routes"
	config "../src/config"
)

func TestStatus(t *testing.T) {
	envConfig := config.LoadEnv()
	testServer := httptest.NewServer(routes.SetupRouter())
	defer testServer.Close()
	
  response, error := http.Get(fmt.Sprintf("http://%s:%v%s/status", envConfig.Host, envConfig.Port, envConfig.APIPrefix))

  if error != nil {
    t.Fatalf("Expected no error, got %v", error)
  }

  if response.StatusCode != 200 {
    t.Fatalf("Expected status code 200, got %v", response.StatusCode)
  }
}

/*func TestGetEntries(t *testing.T) {
	req, err := http.NewRequest("GET", "/entries", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(GetEntries)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := `[{"id":1,"first_name":"Krish","last_name":"Bhanushali","email_address":"krishsb2405@gmail.com","phone_number":"0987654321"},{"id":2,"first_name":"Rick","last_name":"Parker","email_address":"rick.parker@gmail.com","phone_number":"1234567890"},{"id":3,"first_name":"Kelly","last_name":"Franco","email_address":"kelly.franco@gmail.com","phone_number":"1112223333"}]`
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}*/

