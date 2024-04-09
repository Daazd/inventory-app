const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const User = sequelize.define("User", {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    isAdmin: Sequelize.BOOLEAN,
    });


module.exports = {
    db: sequelize,
    User,
};