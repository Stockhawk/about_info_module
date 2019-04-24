const fs = require('fs');
const path = require('path');

const writeToFile = require('./writer.js');
const stock = require('./stock.js');
const tag = require('./tags.js');

let stockFileName;
let stockStream;
const tagFileName = 'tags.csv';
const tagStream = fs.createWriteStream(path.join(__dirname, '/data/', tagFileName));

const DOCUMENTS = Math.pow(10, 6);

for (let i = 0; i < 10; i++) {
  stockFileName = `stocks-${i}.csv`
  stockStream = fs.createWriteStream(path.join(__dirname, '/data/', stockFileName));
  writeToFile(stockStream, {
    data: (idx) => stock.csv.data(idx, { delimiter: '|', space: false }),
    filename: stockFileName,
    start: DOCUMENTS * i,
    target: DOCUMENTS * (i + 1),
    header: stock.csv.header,
    comma: false,
  });
}

writeToFile(tagStream, {
  data: (idx) => tag.csv.data(idx, DOCUMENTS, { delimiter: '|', space: false }),
  filename: tagFileName,
  target: tag.length,
  header: tag.csv.header,
  comma: false,
});