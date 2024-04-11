const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.findAll();
  console.log(items);
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.json(item);
});

router.post("/", async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await Item.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: "Item deleted" });
});

router.put("/:id", async (req, res) => {
  const updatedItem = await Item.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(updatedItem);
});

module.exports = router;
