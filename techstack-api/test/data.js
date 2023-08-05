import request from "supertest";
import app from "../app.js";

describe("GET /files/getfile?fileName=test2.csv", function () {
  it("return json response", function () {
    return request(app)
      .get("/files/getfile?fileName=test2.csv")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(
        '{"file":"test2.csv","lines":[{"text":"fGFAtrAiVscIwpaKrki","number":"9591","hex":"919738c992bdd1ec4b58b517e983cbed"}]}'
      );
  });
});
