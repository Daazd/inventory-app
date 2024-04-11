const request = require("supertest");
const app = require("./app");

const { Item } = require("./models");
jest.mock("./models");

const item1 = {
  id: 1,
  name: "test item",
  description: "test description",
  price: 10,
  category: "test category",
  image: "test image",
};

const item2 = {
  id: 2,
  name: "test item 2",
  description: "test description 2",
  price: 20,
  category: "test category 2",
  image: "test image 2",
};

const newItem = {
  name: "test item 3",
  description: "test description 3",
  price: 30,
  category: "test category 3",
  image: "test image 3",
};

describe("GET /items", () => {
  it("should return an array of items", async () => {
    Item.findAll.mockResolvedValue([item1, item2]);
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

describe("GET /items/:id", () => {
  it("should return an item", async () => {
    Item.findByPk.mockResolvedValueOnce(item1);
    const response = await request(app).get("/api/items/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("category");
    expect(response.body).toHaveProperty("image");
  });
});

describe("POST /items", () => {
  it("should create a new item", async () => {
    Item.create.mockResolvedValueOnce({ id: 3, ...newItem });
    const response = await request(app).post("/api/items").send(newItem);
    expect(response.status).toBe(200);

    // Assert the response body matches the expected data
    expect(response.body).toEqual({ id: 3, ...newItem });
  });
});

describe("PUT /items/:id", () => {
  it("should update an item", async () => {
    Item.update.mockResolvedValueOnce({ id: 1, ...newItem });
    const response = await request(app).put("/api/items/1").send(newItem);
    //console.log(response.body)
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, ...newItem });
  });
});

describe("DELETE /items/:id", () => {
  it("should delete an item", async () => {
    Item.destroy.mockResolvedValueOnce(item1);
    const response = await request(app).delete("/api/items/1");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Item deleted");
  });
});
