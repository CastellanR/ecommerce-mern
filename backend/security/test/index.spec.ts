const request = require("supertest");

import { app } from "../src/index";

beforeAll(function (done) {
  app.on("appStarted", function(){  // Wait until express app is up. It's listening the event appStarted.
      done();
  });
});

describe("App status", () => {
  it("Check if app is ready to work", (done) =>
    request(app)
      .get("/status")
      .expect(200,done))
});
