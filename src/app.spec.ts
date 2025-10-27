import { setupApp } from "./app";
import request from "supertest";

describe("App tests", () => {
  const app = setupApp();

  it("should respond with Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World");
  });
});
