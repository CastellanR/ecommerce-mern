export const customError = (error) => {
  console.log("customError -> error", error);

  return {
    name: error.response.statusText,
    message: error.response.data.error || error.response.data.message,
    code: error.response.status,
  };
};
