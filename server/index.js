const express = require('express');
const parser = require('body-parser');
const path = require('path');
require('../db/config');

const app = express();
const PORT = 1337;
const { router } = require('./router');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')))

app.use('/api', router)

app.listen(PORT, (err) => {
  if (err) { console.log('Error starting server:', err) }
  console.log('Listening on PORT', PORT)
})