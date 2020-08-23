export const login = async ({ email, password, keepSessionActive }) => {
  return new Promise(async (resolve, reject) => {
    await setTimeout(() => {
      resolve({ body: { idUser: "Id", email: "email", token: "token" } });
    }, 1000);
  });
};
