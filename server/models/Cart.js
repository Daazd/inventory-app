const { db } = require("../db");
const { DataTypes } = require("sequelize");

const Cart = db.define("Cart", {
    cartId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = {
    Cart
};