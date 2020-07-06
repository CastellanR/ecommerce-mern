const request = require("supertest");

import { app } from "../src/index";
import {registerTest, mockData} from "./register";
import loginTest from "./login";

beforeAll((done) => {
  app.on("appStarted", () => {
    done(); // Wait until express app is up. It's listening the event appStarted.
  });
});

describe("App status", () => {
  it("Check if app is ready to work", (done) =>
    request(app).get("/status").expect(200, done));
});

afterAll((done) => {
  app.on("appStarted", () => {

    done();
  });
})

registerTest(request, app);
loginTest(request, app);