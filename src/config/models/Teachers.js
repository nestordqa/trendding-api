const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Teachers = sequelize.define(
    'teachers',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        document: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especialidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'teachers',
    },
);

module.exports = {
    Teachers
};