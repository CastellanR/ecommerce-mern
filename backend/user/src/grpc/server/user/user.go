package user

import (
	"context"
	"fmt"
)

// GRPCServer struct
type GRPCServer struct{
    //*config.DB
}

// CreateUser method
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
    fmt.Println("req")
    fmt.Println(req)
    fmt.Println(fmt.Sprintf("%v%v%v%v",req.FirstName, req.LastName, req.Email, req.Password))
    /*dtoUser := user.DTOCreateUser{req.FirstName, req.LastName, req.Email, req.Password}
    id, _ := user.CreateUser(s.DB, dtoUser)
    fmt.Println(id)*/
    return &CreateUserResponse{
        Id: "id",
    }, nil
}