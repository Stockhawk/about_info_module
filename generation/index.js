const fs = require('fs');
const path = require('path');

const writeToFile = require('./writer.js');
const stock = require('./stock.js');
const tag = require('./tags.js');

let stockStream;
let stockFileName;
const tagStream = fs.createWriteStream(path.join(__dirname, '/data/tags.json'));

const DOCUMENTS = Math.pow(10, 1);

for (let i = 0; i < 10; i++) {
  stockFileName = `stocks-${i}.json`
  stockStream = fs.createWriteStream(path.join(__dirname, '/data/', stockFileName));
  writeToFile(stockStream, {
    data: stock.json.data,
    filename: stockFileName,
    start: DOCUMENTS * i,
    target: DOCUMENTS * (i + 1),
    header: stock.json.header,
    footer: stock.json.footer,
    comma: true,
  });
}

writeToFile(tagStream, {
  data: ((idx) => tag.json.data(idx, DOCUMENTS)),
  filename: 'tags.json',
  target: tag.length,
  header: tag.json.header,
  footer: tag.json.footer,
  comma: true,
});