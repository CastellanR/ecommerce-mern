export class CustomError extends Error {
  constructor(public code: number, public message: string) {
      super(message);
      this.code = code;
      this.message = message;
  }
}

// Extract message and code from error message and returns an error object
export const newError = (error: Error) : CustomError => {
  const code = error.message.slice(error.message.indexOf("=")+1,-1)
  const message = error.message.substring(error.message.indexOf(":")+2,error.message.indexOf("%"))
  return new CustomError(parseInt(code), message)
}