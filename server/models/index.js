const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')


const Item = sequelize.define("Item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.FLOAT,
  categorty: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
