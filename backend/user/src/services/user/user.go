package user

import (
	"time"
	"fmt"
	// "../../models"
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

type user struct {
	userDTO DTOCreateUser
	createdAt time.Time
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
/*_, err := db.Exec(`
	CREATE TABLE "user" (
		id serial PRIMARY KEY NOT NULL, 
		firstName text NOT NULL,
		lastName text NOT NULL, 
		email text NOT NULL, 
		password text NOT NULL, 
		createdAt timestamp NOT NULL,
		updatedAt timestamp NULL,
		deletedAt timestamp NULL
		);`)
if err != nil {
	fmt.Println(err)
}*/
var id string
err = db.QueryRow(
`INSERT INTO "user" (firstName,lastName, email, password,createdAt) 
VALUES($1, $2, $3, $4, $5) RETURNING id`, userDTO.FirstName,
userDTO.LastName, 
userDTO.Email,
string(hashedPassword),
time.Now()).Scan(&id)

if err != nil {
	fmt.Println(err)
}
fmt.Println(id)

// db.Exec("CREATE TABLE inventory3 (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);")
		/*row := db.QueryRow("INSERT INTO user (firstName,lastName, email, password,created_at) VALUES($1, $2, $3, $4, $5)",
		userDTO.FirstName,
		userDTO.LastName, 
		userDTO.Email,
		string(hashedPassword),
		time.Now())
		fmt.Println(row)*/
		return "id", nil
}

// GetUserByID returns the user's info searched by ID
func GetUserByID() {

}

// GetListUser returns the user list of the database	
func GetListUser() {

}