const express = require("express");
const router = express.Router();
const { Cart } = require("../models/Cart");
const { CartItem } = require("../models/CartItem");
const { Item } = require("../models/Item");

router.get("/cart/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    const cart = await user.findOrCreateCart();
    res.json(cart);
});

router.post("/cart/:cartId/add", async (req, res) => {
    const { itemId, quantity } = req.body;
    const cart = await Cart.findByPk(req.params.cartId, {
        include: CartItem,
    });
    const item = await Item.findByPk(itemId);
    if (!item) {
        return res.status(404).send("Product not found");
    }
    const newItem =await CartItem.create({
        quantity: quantity,
    });
    await newItem.setItem(item);
    await newItem.setCart(cart);
    res.json(cart);
    // TODO test that item isnt already in the cart
});

router.delete("/cart/:cartId/remove/:itemId", async (req, res) => {
    await CartItem.destroy({
        where: {
        id: req.params.itemId,
        },
    });
    const cart = await Cart.findByPk(req.params.cartId, {
        include: CartItem,
    });
    res.json(cart);
});

router.delete("/cart/:cartId/empty", async (req, res) => {
    const cart = await Cart.findByPk(
         req.params.cartId
    );
    cart.removeCartItems();
    res.json(cart);
});

module.exports = router;