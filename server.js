const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(
  helmet.expectCt({
    enforce: true
  })
);

app.get('/', function (req, res) {
  res.send('hello');
});
