const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Images = sequelize.define(
    'Images',
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'images',
    },
);

module.exports = {
    Images
};