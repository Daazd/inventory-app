const express = require("express");
const router = express.Router();
const { Cart } = require("../models/Cart");
const { CartItem } = require("../models/CartItem");

router.get("/cart/:userId", async (req, res) => {
    const cart = await Cart.findOne({
        where: {
        userId: req.params.userId,
        },
        include: CartItem,
    });
    res.json(cart);
});

router.post("/cart/:userId/add", async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({
        where: {
        userId: req.params.userId,
        },
    });
    const newItem = await CartItem.create({
        productId,
        quantity,
    });
    res.json(newItem);
});

router.delete("/cart/:userId/remove/:itemId", async (req, res) => {
    await CartItem.destroy({
        where: {
        id: req.params.itemId,
        },
    });
    res.json({ message: "Item removed" });
});

router.delete("/cart/:userId/empty", async (req, res) => {
    const cart = await Cart.findOne({
        where: {
        userId: req.params.userId,
        },
    });
    await CartItem.destroy({
        where: {
        cartId: cart.id,
        },
    });
    res.json({ message: "Cart emptied" });
});

module.exports = router;