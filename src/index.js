const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/config');
const { swaggerDocs: V1swaggerDocs} = require('./routes/swagger');
const router = require('./routes/routes');
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
    await connectDB();
  } catch (error) {
    console.error(error);
  }
  console.log(`May the force be with you on port ${3001}.`);
  V1swaggerDocs(app, 3001);
});