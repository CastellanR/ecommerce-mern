const supertest = require("supertest");

import { app } from "../src/index";

describe("App1", () => {
  it("Testing to see if Jest works", () => {
    expect(2).toBe(2);
  });
});

describe("App", () => {
  it("works", () =>
    supertest(app).get("/api/security").expect(200));
});
