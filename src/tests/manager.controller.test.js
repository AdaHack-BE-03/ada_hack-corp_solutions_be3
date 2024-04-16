//exemplo

import { expect, test, describe } from "@jest/globals";
import request from "supertest";
import app from "../app.js";

describe("Manager Controller", () => {
  test("deve calcular o valor corretamente", async () => {
    const { status, body } = await request(app)
      .get("/calcular-dividendos")
      .send({ valor: 100, tempo: 10 });

    expect(status).toBe(200);
    expect(body.resultado).toBe(100.1);
  });
});
