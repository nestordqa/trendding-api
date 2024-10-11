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
        test: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // tipo: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        hour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hours: {
            type: DataTypes.INTEGER,
            allowNull: false,
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