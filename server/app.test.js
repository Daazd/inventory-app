const request = require("supertest");
const app = require("./app");
const { Item } = require("./models/");

describe("GET /items", () => {
  it("should return an array of items", async () => {
    const response = await request(app).get("/api/items");
    expect(response.status).toBe(200);
    const firstItem = response.body[0];
    expect(response.body).toBeInstanceOf(Array);
    expect(firstItem).toHaveProperty("id");
    expect(firstItem).toHaveProperty("name");
    expect(firstItem).toHaveProperty("description");
    expect(firstItem).toHaveProperty("price");
    expect(firstItem).toHaveProperty("category");
    expect(firstItem).toHaveProperty("image");
  });
});
