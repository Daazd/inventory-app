const { Cart } = require("./Cart");
const { CartItem } = require("./CartItem");
const { Item } = require("./Item");
const { User } = require("./User");
const { db } = require("../db");

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

User.hasOne(Cart);
Cart.belongsTo(User);

Item.hasMany(CartItem);
CartItem.belongsTo(Item);

module.exports = { db, Item, User, Cart, CartItem };