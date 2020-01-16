const express = require('express');
const app = express();
const data = require('./dane');
app.get('/', function (req, res) {
  res.send('hello world')
})
data.save();