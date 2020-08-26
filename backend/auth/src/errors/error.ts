export class CustomError extends Error {
  constructor(public code: number, public message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

// Extract message and code from error message and returns an error object
export const newError = (error: any): CustomError =>
  new CustomError(parseInt(error.code), error.details);
