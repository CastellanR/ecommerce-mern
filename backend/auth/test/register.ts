export const mockData = {
  email: "test@gmail.com",
  firstName: "Prueba",
  lastName: "Test",
  password: "contrasena",
  deviceName: "Dispositivo",
  agent: "Linux",
};

export const registerTest = (request: any, app: any) => {
  describe("Register User", () => {
    it("Register with all data required", (done) =>
      request(app).post("/api/auth/register").send(mockData).expect(201, done));

    it("Register with email missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          firstName: mockData.firstName,
          lastName: mockData.lastName,
          password: mockData.password,
          agent: mockData.agent,
          deviceName: mockData.deviceName,
        })
        .expect(422, done));

    it("Register with firstName missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          email: mockData.email,
          lastName: mockData.lastName,
          password: mockData.password,
          agent: mockData.agent,
          deviceName: mockData.deviceName,
        })
        .expect(422, done));

    it("Register with lastName missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          firstName: mockData.firstName,
          email: mockData.email,
          password: mockData.password,
          agent: mockData.agent,
          deviceName: mockData.deviceName,
        })
        .expect(422, done));

    it("Register with password missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          firstName: mockData.firstName,
          lastName: mockData.lastName,
          email: mockData.email,
          agent: mockData.agent,
          deviceName: mockData.deviceName,
        })
        .expect(422, done));

    it("Register with agent missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          firstName: mockData.firstName,
          lastName: mockData.lastName,
          email: mockData.email,
          password: mockData.password,
          agent: mockData.agent,
        })
        .expect(422, done));

    it("Register with deviceName missing", (done) =>
      request(app)
        .post("/api/auth/register")
        .send({
          firstName: mockData.firstName,
          lastName: mockData.lastName,
          email: mockData.email,
          password: mockData.password,
          deviceName: mockData.deviceName,
        })
        .expect(422, done));
  });
};