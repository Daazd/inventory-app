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

router.post('/items', async (req, res) => {
    const item = await Item.create(req.body);
    res.json(item);
});

router.delete('/items/:id', async (req, res) => {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({message: 'Item deleted'});
});

router.put('/items/:id', async (req, res) => {
    const updatedItem = await Item.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json(updatedItem);
});