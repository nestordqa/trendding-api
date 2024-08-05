const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
require('dotenv').config();

//MODELO PARA LOS USUARIOS
const Users = sequelize.define(
    'Users',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['ADMIN', 'USER', 'TEACHER'],
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        tableName: 'users',
    },
);

module.exports = {
    Users
};