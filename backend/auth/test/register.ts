const registerTest = (request: any, app: any) => {  
  describe("Register User", () => {
    it("Register with all data required", (done) =>
    request(app)
    .post("/api/auth/register")
    .send({
      email: "test@gmail.com",
      firstName: "Prueba",
      lastName: "Test",
      password: "contrasena",
    })
    .expect(200, done));

    it("Register with email missing", (done) =>
    request(app)
    .post("/api/auth/register")
    .send({
      firstName: "Prueba",
      lastName: "Test",
      password: "contrasena",
    })
    .expect(422, done));

    it("Register with firstName missing", (done) =>
    request(app)
    .post("/api/auth/register")
    .send({
      email: "test@gmail.com",
      lastName: "Test",
      password: "contrasena",
    })
    .expect(422, done));

    it("Register with lastName missing", (done) =>
    request(app)
    .post("/api/auth/register")
    .send({
      firstName: "Prueba",
      email: "test@gmail.com",
      password: "contrasena",
    })
    .expect(422, done));

    it("Register with password missing", (done) =>
    request(app)
    .post("/api/auth/register")
    .send({
      firstName: "Prueba",
      lastName: "Test",
      email: "test@gmail.com",
    })
    .expect(422, done));
  });
}

export default registerTest;