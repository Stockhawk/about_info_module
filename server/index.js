const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const compression = require('compression');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

app.listen(port, () => console.log('APP IS LISTENING'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/stocks/:symbol', express.static(path.join(__dirname, '../client/dist')));
