const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const Stock = require('../database/Stock.js');
const findStock = require('../database/Stock.js')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('APP IS LISTENING'));

app.use('/stocks/', express.static(path.join(__dirname, '../client/dist')));

app.get('/stocks/:symbol', (req, res) => {
  console.log('params', req.params)
  // Stock.find(req.params, (err, data) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     console.log('data', data)
  //     res.send(data);
  //   }
  // });
  findStock(req.params).then(data => res.send(data))
});
