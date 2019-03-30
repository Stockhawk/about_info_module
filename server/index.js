const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const Stock = require('../database/Stock.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('APP IS LISTENING'));

app.use('/', express.static(path.join(__dirname, './client/dist')));

app.get('/api/stocks/:symbol', (req, res) => {
  Stock.find(req.params, (err, data) => {
    console.log(req.params);
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});
