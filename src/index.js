const express = require('express')
const bodyParser = require('body-parser');
const { default: client, connectDB, queryDB } = require('./config/config');
const { swaggerDocs: V1swaggerDocs} = require('./routes/swagger');
const router = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api/', router);

app.get('/', async (request, response) => {
  response.json('Api working OK!');
});


app.listen(3000, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
  }
  console.log(`May the force be with you on port ${3000}.`);
  V1swaggerDocs(app, 3000);
});