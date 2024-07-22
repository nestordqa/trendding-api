const Client = require('pg').Client;
require('dotenv').config();

const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DATABASE_PORT
} = process.env;


const client = new Client({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_DATABASE_PORT
  });
   
const connectDB = async () => {
    try {
        await client.connect();
        console.info('DB connected!!');
    } catch (error) {
        console.error(error);
    }
};

const queryDB = async (query) => {
    try {
        console.info('Query sended!!!');
        return await client.query(query);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    connectDB,
    queryDB
};