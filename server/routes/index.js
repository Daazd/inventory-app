const express = require("express");
const router = express.Router();
const itemsRouter = require("./items");
const usersRouter = require("./users");
const cartRouter = require("./cart");


// different model routers
router.use("/items", itemsRouter);
router.use("/users", usersRouter);
router.use("/cart", cartRouter);




module.exports = router;
