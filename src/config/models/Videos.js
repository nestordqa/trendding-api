const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Videos = sequelize.define(
    'Videos',
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'videos',
    },
);

module.exports = {
    Videos
};