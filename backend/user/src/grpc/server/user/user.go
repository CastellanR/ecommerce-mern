package user

import (
    "context"
    "fmt"
    user "../../../services/user"
    "../../../config"
)

// GRPCServer struct
type GRPCServer struct{
    DB *config.DB
}

// CreateUser method
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
    dtoUser := user.DTOCreateUser{FirstName: req.FirstName, LastName: req.LastName, Email: req.Email, Password: req.Password}
    id, _ := user.CreateUser(s.DB, dtoUser)
    fmt.Println(id)
    return &CreateUserResponse{
        Id: "id",
    }, nil
}