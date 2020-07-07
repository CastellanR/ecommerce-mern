package validators

import (
	user "../services/user"
)

//CreateUser validation
func CreateUser(dtoUser user.DTOCreateUser) []string{
	var listError []string
	switch {
	case dtoUser.FirstName == "":
		listError = append(listError,"FirstName missing field")
		fallthrough
	case dtoUser.LastName == "":
		listError = append(listError,"LastName missing field")
		fallthrough
	case dtoUser.Email == "":
		listError = append(listError,"Email missing field")
		fallthrough
	case dtoUser.Password == "":
		listError = append(listError,"Password missing field")
	}
	return listError
}