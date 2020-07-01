const loginTest = (request: any, app: any) => {
  describe("Login User", () => {
    it("Login with all data required", (done) => {
      request(app)
        .post("/api/auth/login")
        .send({
          email: "test@gmail.com",
          password: "contrasena",
          keepActive: true,
        })
        .expect(200, done)
        .expect((response: any) => {
          expect(typeof response.body.message).toBe("string");
        });
    });
  });
};

export default loginTest;
