const express = require("express");
const router = express.Router();
const itemsRouter = require("./items");
const usersRouter = require("./users");

// different model routers
router.use("/items", itemsRouter);
router.use("/users", usersRouter);



module.exports = router;
