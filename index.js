const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const { connectDB } = require('./config/config');
const { swaggerDocs: V1swaggerDocs} = require('./src/routes/swagger');
const router = require('./src/routes/routes');
const { sequelize } = require('./src/config/db');
// const executeAsociations = require('./config/asociations');
require('./src/config/asociations');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan('combined'));

app.use('/api/', router);

app.get('/', async (request, response) => {
  response.json('Api working OK!');
});


app.listen(3001, async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync({
        force: false
      });
    console.info('Postgres DB connected successfully');
  } catch (error) {
    console.error(error);
  }
  console.log(`May the force be with you on port ${3001}.`);
  // await executeAsociations();
  V1swaggerDocs(app, 3001);
});