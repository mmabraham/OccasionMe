// dependencies
const express = require('express');
const bodyParser = require('body-parser');

const eventsRouter = require('./routers/events');

const app = express();

app.use(express.static(`${__dirname}/../web_app/dist`));

app.use('/events/', eventsRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
});