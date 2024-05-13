const Client = require('pg').Client;
require('dotenv').config();

const {
    POSTGRES_URL
} = process.env;


const client = new Client({
    connectionString: POSTGRES_URL,
  })
   
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