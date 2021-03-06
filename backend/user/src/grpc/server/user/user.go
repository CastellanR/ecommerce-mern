package user

import (
	"context"
	"fmt"
	"strings"
	user "../../../services/user"
	validation "../../../validators"
	"../../../config"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
)

// GRPCServer struct
type GRPCServer struct{
	DBConnection *config.DatabaseConnection
}

// CreateUser method
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
	dtoUser := user.DTOCreateUser{FirstName: req.FirstName, LastName: req.LastName, Email: req.Email, Password: req.Password}

	if valErr:= validation.CreateUser(dtoUser); len(valErr) != 0 {
		return nil, status.Errorf(400,strings.Join(valErr, ", "))
	}

	id, err := user.CreateUser(s.DBConnection, dtoUser)

	if err != nil {
		return nil, status.Errorf(codes.Code(err.Code),err.Message)
	}

	return &CreateUserResponse{
		Id: id,
	}, nil
}

// GetUserByEmail method
func (s *GRPCServer) GetUserByEmail(ctx context.Context, req *GetUserByEmailRequest) (*GetUserByEmailResponse, error) {
	if req.Email == "" {
		return nil, status.Errorf(422,fmt.Sprintf("Email field empty"))
	}

	dtoUser, err := user.GetUserByEmail(s.DBConnection, req.Email)

	if err != nil {
		return nil, status.Errorf(codes.Code(err.Code),err.Message)
	}

	return &GetUserByEmailResponse{
		Id: dtoUser.ID,
		Email: dtoUser.Email,
		Password: dtoUser.Password,
		IsVerified: dtoUser.IsVerified,
	}, nil
}

//ActivateUser method
func (s *GRPCServer) ActivateUser(ctx context.Context, req *ActivateUserRequest) (*ActivateUserResponse, error) {
	if req.IdUser == 0 {
		return nil, status.Errorf(422,fmt.Sprintf("IdUser field empty"))
	}
	response, err := user.ActivateUser(s.DBConnection, req.IdUser)

	if err != nil {
		return nil, status.Errorf(codes.Code(err.Code),err.Message)
	}

	return &ActivateUserResponse{
		Response: response,
	}, nil
}

// DeleteUserByCondition method
func (s *GRPCServer) DeleteUserByCondition(ctx context.Context, req *DeleteUserByConditionRequest) (*DeleteUserByConditionResponse, error) {
	
	response, err := user.DeleteUserByCondition(s.DBConnection, req.Attribute, req.Value)

	if err != nil {
		return nil, status.Errorf(codes.Code(err.Code),err.Message)
	}

	return &DeleteUserByConditionResponse{
		Response: response,
	}, nil
}