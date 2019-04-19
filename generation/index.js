const fs = require('fs');
const path = require('path');

const writeToFile = require('./writer.js');
const createStock = require('./stock.js');
const createTags = require('./tags.js');

const stockStream = fs.createWriteStream(path.join(__dirname, '/data/stocks.json'));
const tagStream = fs.createWriteStream(path.join(__dirname, '/data/tags.json'));

const DOCUMENTS = Math.pow(10, 2);

writeToFile(stockStream, DOCUMENTS, {
  data: createStock,
  header: '[\n',
  footer: ']\n',
  comma: true
});

writeToFile(tagStream, createTags.collectionLength, {
  data: ((idx) => createTags(idx, DOCUMENTS)),
  header: '[\n',
  footer: ']\n',
  comma: true
});