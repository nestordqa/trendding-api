const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA CURSOS
const Courses = sequelize.define(
    'Courses',
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
            type: DataTypes.TEXT,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        hour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        students: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lectionsNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        test: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        certificado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'courses',
    },
);

module.exports = {
    Courses
};