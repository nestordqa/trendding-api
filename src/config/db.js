const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DATABASE_PORT,
    DEV
} = process.env;

const url = DEV == 0 ? `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_DATABASE_PORT}/trendding` : 'postgres://default:2BhJ4dzXIAak@ep-rapid-pine-a4ygdx1x.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require';

const sequelize = new Sequelize(url);

module.exports = {
    sequelize,
};