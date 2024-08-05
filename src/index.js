const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const { connectDB } = require('./config/config');
const { swaggerDocs: V1swaggerDocs} = require('./routes/swagger');
const router = require('./routes/routes');
const { sequelize } = require('./config/db');
// const executeAsociations = require('./config/asociations');
require('./config/asociations');
const app = express();

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
        force: true
      });
    console.info('Postgres DB connected successfully');
  } catch (error) {
    console.error(error);
  }
  console.log(`May the force be with you on port ${3001}.`);
  // await executeAsociations();
  V1swaggerDocs(app, 3001);
});