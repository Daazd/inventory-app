const { db } = require("../db");
const { DataTypes } = require("sequelize");

const Cart = db.define("Cart", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = {
    Cart
};