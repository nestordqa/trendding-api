const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Tags = sequelize.define(
    'Tags',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'tags',
    },
);

module.exports = {
    Tags
};