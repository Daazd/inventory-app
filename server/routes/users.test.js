const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

describe("GET /users/:id", () => {
    it("should return a user", async () => {
        const response = await request(app).get("/api/users/1");
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Taylor");
    });
});

describe("GET /users/:id/cart", () => {
    it("should return a user's cart", async () => {
        const response = await request(app).get("/api/users/1/cart");
        expect(response.status).toBe(200);
        console.log(response.body);
        expect(response.body.userId).toBe(1);
    });
});