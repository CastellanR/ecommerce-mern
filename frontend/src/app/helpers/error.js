export const customError = (error) => ({
  name: (error.response && error.response.statusText) || "Server error",
  message:
    (error.response &&
      (error.response.data.error || error.response.data.message)) ||
    (error.message === "Network Error"
      ? "Auth microservice down"
      : error.message),
  code:
    (error.response && error.response.status) ||
    (error.message === "Network Error" ? 503 : 500),
});
