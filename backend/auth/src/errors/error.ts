export class CustomError extends Error {
  constructor(public code: number, public message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

// Extract message and code from error message and returns an error object
export const newError = (error: any): CustomError => {
  const code = error.slice(error.indexOf("=") + 1, -1);
  const message = error
    .substring(error, error.indexOf("%"))
    .replace("UNKNOWN: ", "");
  return new CustomError(parseInt(code), message);
};
