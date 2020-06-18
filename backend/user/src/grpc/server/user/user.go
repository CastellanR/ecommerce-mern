package user

import (
	"context"
	user "../../../services/user"
	logger "github.com/sirupsen/logrus"
	"../../../config"
)

// GRPCServer struct
type GRPCServer struct{
	DB *config.DB
}

// CreateUser method
func (s *GRPCServer) CreateUser(ctx context.Context, req *CreateUserRequest) (*CreateUserResponse, error) {
	dtoUser := user.DTOCreateUser{FirstName: req.FirstName, LastName: req.LastName, Email: req.Email, Password: req.Password}
	id, err := user.CreateUser(s.DB, dtoUser)

	if err != nil {
		logger.Error(err)
		return nil,err
	}

	return &CreateUserResponse{
		Id: id,
	}, nil
}

// GetUserByEmail method
func (s *GRPCServer) GetUserByEmail(ctx context.Context, req *GetUserByEmailRequest) (*GetUserByEmailResponse, error) {
    dtoUser, err := user.GetUserByEmail(s.DB, req.Email)

    if err != nil {
			logger.Error(err)
			return nil,err
    }

    return &GetUserByEmailResponse{
			Id: dtoUser.ID,
			Email: dtoUser.Email,
			Password: dtoUser.Password,
    }, nil
}