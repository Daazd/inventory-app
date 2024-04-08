const express = require("express");
const router = express.Router();
const {Item} = require('../models')

router.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

router.get('/items/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id);
    res.json(item);
});