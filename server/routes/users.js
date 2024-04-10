const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { User } = require("../models/User");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  console.log(user);
  if (user) {
    res.status(400).send("User already exists");
  } else {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user && user.password === req.body.password) {
    res.status(200).json(user);
  } else {
    res.status(400).send("Invalid email or password");
  }
});

router.delete("/:id", async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: "User deleted" });
});

router.put("/:id", async (req, res) => {
  const updatedUser = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(updatedUser);
});

module.exports = router;
