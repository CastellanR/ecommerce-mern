package user

import (
	"time"
	// "../../models"
	// logger "github.com/sirupsen/logrus"
	"../../config"
	"golang.org/x/crypto/bcrypt"
)

//DTOCreateUser type
type DTOCreateUser struct{
	FirstName string
	LastName string
	Email string
	Password string
}

// CreateUser save an user to the database
func CreateUser(db *config.DB, userDTO DTOCreateUser) (string, error) {
	
	hashedPassword, err := bcrypt.GenerateFromPassword(
		[]byte(userDTO.Password),
		bcrypt.DefaultCost,
		)
		
	if err != nil {
		return "Error", err
	}
		
	var id string
	err = db.QueryRow(
		`INSERT INTO "user" (firstName,lastName, email, password,createdAt) 
		VALUES($1, $2, $3, $4, $5) RETURNING id`, userDTO.FirstName,
		userDTO.LastName, 
		userDTO.Email,
		string(hashedPassword),
		time.Now()).Scan(&id)

	if err != nil {
		return "", err
	}
	return id, nil
}

// GetUserByID returns the user's info searched by ID
func GetUserByID() {

}

// GetListUser returns the user list of the database	
func GetListUser() {

}