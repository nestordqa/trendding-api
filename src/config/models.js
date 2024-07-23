const { DataTypes, Sequelize } = require('sequelize');
require('dotenv').config();

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DATABASE_PORT
} = process.env;

const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_DATABASE_PORT}/trendding`);

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
            values: ['ADMIN', 'SUPER_USER', 'USER'],
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
            // It is possible to create foreign keys:
        // bar_id: {
        //     type: DataTypes.INTEGER,
    
        //     references: {
        //     // This is a reference to another model
        //     model: Bar,
    
        //     // This is the column name of the referenced model
        //     key: 'id',
    
        //     // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        //     deferrable: Deferrable.INITIALLY_IMMEDIATE,
        //     // Options:
        //     // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        //     // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        //     // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
        //     },
        // },
    },
    {
        tableName: 'users',
    },
);


const connectDB = (async () => {
    await sequelize.authenticate();
    await sequelize.sync();

})();

module.exports = {
    Users,
    connectDB,
};