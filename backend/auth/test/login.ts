import { mockData } from "./register";
import { getUserByEmail, activateUser } from "../src/grpc/client/user/user";

const loginTest = (request: any, app: any) => {
  describe("Login User", () => {
    it("Login with all data required", async (done) => {
      const infoUser = await getUserByEmail(mockData.email);
      await activateUser(infoUser.id)   //Activate user registered before login
      request(app)
        .post("/api/auth/login")
        .send({
          email: mockData.email,
          password: mockData.password,
          keepSessionActive: true,
          agent: mockData.agent,
          deviceName: mockData.deviceName,
        })
        .expect(200, done)
        .expect((response: any) => {
          expect(typeof response.body.message.id).toBe("string")
          expect(typeof response.body.message.email).toBe("string");
          expect(typeof response.body.message.token).toBe("string");
          expect(response.body.message.id).not.toBeNull();
          expect(response.body.message.email).not.toBeNull();
          expect(response.body.message.token).not.toBeNull();
          expect(response.body.message.token).toContain("Bearer")          
        });
    });
  });
};

export default loginTest;
