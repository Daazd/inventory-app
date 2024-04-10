const { Sequelize } = require("sequelize");
const { db } = require("../db");

const Item = db.define("Item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.FLOAT,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  Item
};
