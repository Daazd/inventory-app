const { Sequelize } = require("sequelize");
const { db } = require("../db");

const User = db.define("User", {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    isAdmin: Sequelize.BOOLEAN,
    });


module.exports = {
    User
};