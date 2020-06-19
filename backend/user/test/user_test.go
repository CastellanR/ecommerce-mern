package main_test

import(
	"testing"
	"fmt"
	user "../src/services/user"
)

var mockUser = user.DTOCreateUser{
  FirstName: "Prueba",
  LastName: "Test", 
  Email:"emailPrueba@gmail.com", 
  Password: "prueba"}

func TestCreateuser(t *testing.T) {
  var id string
  id, error := user.CreateUser(&DataStruct, mockUser)

  if error != nil {
    t.Fatalf("Expected no error, got %v", error)
  }
  if fmt.Sprintf("%T",id) != "string" {
    t.Fatalf("Expected a string id, got %v", fmt.Sprintf("%T",id))
  }
}

func TestGetUserByEmail(t *testing.T) {
  response, error := user.GetUserByEmail(&DataStruct, mockUser.Email)

  if error != nil {
    t.Fatalf("Expected no error, got %v", error)
  }

  if response.Email != mockUser.Email {
    t.Fatalf("Expected email emailPrueba@gmail.com, got %v", response.Email)
  }

  if response.Password != mockUser.Password {
    t.Fatalf("Expected password prueba, got %v", response.Password)
  }
}