const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Lections = sequelize.define(
    'Lections',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modalidad: {
            type: DataTypes.ENUM,
            values: ['VIDEOS', 'FILES'],
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER(5),
            allowNull: true
        }
    },
    {
        tableName: 'lections',
    },
);

module.exports = {
    Lections
};