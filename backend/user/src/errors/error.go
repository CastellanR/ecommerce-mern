package errors

//CustomError type
type CustomError struct {
	Message string
	Code    int
}

//New error function
func New(message string, code int) *CustomError {
	err := new(CustomError)
	err.Message = message
	err.Code = code
	return err
}

