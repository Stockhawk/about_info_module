const fs = require('fs');
const path = require('path');

const writeToFile = require('./writer.js');
const stock = require('./stock.js');
const tag = require('./tags.js');

const stockStream = fs.createWriteStream(path.join(__dirname, '/data/stocks.json'));
const tagStream = fs.createWriteStream(path.join(__dirname, '/data/tags.json'));

const DOCUMENTS = Math.pow(10, 2);

writeToFile(stockStream, DOCUMENTS, {
  data: stock.create,
  header: '[\n',
  footer: ']\n',
  comma: true
});

writeToFile(tagStream, tag.length, {
  data: ((idx) => tag.create(idx, DOCUMENTS)),
  header: '[\n',
  footer: ']\n',
  comma: true
});