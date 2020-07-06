package user

import (
	"context"
	user "../../../services/user"
	"../../../config"
	"google.golang.org/grpc/status"
)

// GRPCServer struct
type GRPCServer struct{
	DBConnection *config.DatabaseConnection
}

// CreateUser method
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
	dtoUser := user.DTOCreateUser{FirstName: req.FirstName, LastName: req.LastName, Email: req.Email, Password: req.Password}
	id, err := user.CreateUser(s.DBConnection, dtoUser)

	if err != nil {
		return nil, status.Errorf(2,err.Message, err.Code)
	}

	return &CreateUserResponse{
		Id: id,
	}, nil
}

// GetUserByEmail method
func (s *GRPCServer) GetUserByEmail(ctx context.Context, req *GetUserByEmailRequest) (*GetUserByEmailResponse, error) {
	dtoUser, err := user.GetUserByEmail(s.DBConnection, req.Email)

	if err != nil {
		return nil, status.Errorf(2,err.Message, err.Code)
	}

	return &GetUserByEmailResponse{
		Id: dtoUser.ID,
		Email: dtoUser.Email,
		Password: dtoUser.Password,
		IsVerified: dtoUser.IsVerified,
	}, nil
}

// DeleteUserByCondition method
func (s *GRPCServer) DeleteUserByCondition(ctx context.Context, req *DeleteUserByConditionRequest) (*DeleteUserByConditionResponse, error) {
	response, err := user.DeleteUserByCondition(s.DBConnection, req.Attribute, req.Value)

	if err != nil {
		return nil, status.Errorf(2,err.Message, err.Code)
	}

	return &DeleteUserByConditionResponse{
		Response: response,
	}, nil
}