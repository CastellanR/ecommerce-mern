package main_test

import(
	"testing"
	"fmt"
	user "../src/services/user"
)

func TestCreateuser(t *testing.T) {
	var id string
  id, error := user.CreateUser()

  if error != nil {
    t.Fatalf("Expected no error, got %v", error)
  }
  if fmt.Sprintf("%T",id) != "string" {
    t.Fatalf("Expected a string id, got %v", fmt.Sprintf("%T",id))
  }
}