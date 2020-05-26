package user

import (
    "context"
)

// GRPCServer struct
type GRPCServer struct{}

// CreateUser method for calculate X + Y
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
    return &CreateUserResponse{
        Status: true,
    }, nil
}