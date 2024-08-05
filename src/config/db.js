const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DATABASE_PORT
} = process.env;

const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_DATABASE_PORT}/trendding`);

module.exports = {
    sequelize,
};