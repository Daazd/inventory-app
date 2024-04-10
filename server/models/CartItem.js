const { DataTypes } = require('sequelize');
const { db } = require('../db');

const CartItem = db.define('CartItem', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = {CartItem};