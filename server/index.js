const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const findStock = require('../database/Stock.js');
// const findTag = require('../database/Tag.js');
const request = require('./request.js');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('APP IS LISTENING'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:symbol', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/stocks/:symbol', (req, res) => {
  request.findStock(req.params).then(data => res.send(data));
});

app.get('/stocks/tags/:tag', (req, res) => {
  request.findTag(req.params).then(data => res.send(data));
});
