const faker = require('faker');
const convertBaseCharacters = require('./convert.js');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const collections = [
  '100 Most Popular', 'Upcoming Earnings', 'New On TradeDesk', 'Technology', 'Oil and Gas', 'Finance', 'Software Service', 'Energy', 'Manufacturing', 'Consumer Products', 'ETF', 'Video Games', 'Social Media', 'Health', 'Entertainment', 'Internet', 'Electronic',
  'Semiconductors', 'Pharmaceutical', 'Retail', 'Automotive', 'REIT', 'Banking', 'Food', 'Materials', 'Aerospace',
];

function generateTag(currentCollection, allSymbols) {
  const symbolsArr = [];
  const pricesArr = [];

  for (let j = 0; j < 5; j++) {
    const index = Math.floor(Math.random() * allSymbols);
    symbolsArr.push(convertBaseCharacters(index, alphabet));
  }
  for (let k = 0; k < 5; k++) {
    const randomPrice = faker.finance.amount(80, 180, 2);
    pricesArr.push(randomPrice);
  }

  return {
    symbolsArr,
    pricesArr,
    collections: collections[currentCollection],
  };
}

function createTagCSV(currentCollection, allSymbols) {
  const {
    collections,
    symbolsArr,
    pricesArr,
  } = generateTag(currentCollection, allSymbols);

  const csvString =
    `${collections[currentCollection]},` +
    `[${symbolsArr}],` +
    `[${pricesArr}]`;

  return csvString;
}

function createTagJSON(currentCollection, allSymbols) {
  const tagObject = generateTag(currentCollection, allSymbols);
  const jsonString = JSON.stringify(tagObject);
  return jsonString;
}

module.exports = {
  length: collections.length,
  csv: {
    data: createTagCSV,
    header: 'tag,symbols,price\n',
  },
  json: {
    data: createTagJSON,
    header: '[\n',
    footer: ']',
  },
};