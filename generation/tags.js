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
    tag: collections[currentCollection],
    symbolsArr,
    pricesArr,
  };
}

const createTagCSV = (number, symbols, delimiter = ',', space = true) => {
  const tagObject = generateTag(number, symbols);
  const keys = Object.keys(tagObject);
  let csvString = '';
  keys.forEach((key, index) => {
    csvString += tagObject[key].constructor === Array ? `[${tagObject[key]}]` : tagObject[key];
    csvString += index >= keys.length - 1 ? '' : delimiter;
    csvString += index >= keys.length - 1 || !space ? '' : ' ';
  });
  return csvString;
};

function createTagJSON(currentCollection, allSymbols) {
  const tagObject = generateTag(currentCollection, allSymbols);
  const jsonString = JSON.stringify(tagObject);
  return jsonString;
}

module.exports = {
  length: collections.length,
  csv: {
    data: createTagCSV,
    header: 'tag|symbols|price\n',
  },
  json: {
    data: createTagJSON,
    header: '[\n',
    footer: ']',
  },
};