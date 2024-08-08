const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Categories = sequelize.define(
    'Categories',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'categories',
    },
);

module.exports = {
    Categories
};