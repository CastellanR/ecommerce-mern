export const customError = (error) => ({
  name: (error.response && error.response.statusText) || "Server error",
  message:
    (error.response &&
      (error.response.data.error || error.response.data.message)) ||
    error.message,
  code: (error.response && error.response.status) || 500,
});
