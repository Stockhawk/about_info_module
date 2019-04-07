const faker = require('faker');
const db = require('./index.js');
const Tag = require('./Tag.js');


const symbols = [
  'MSFT', 'AAPL', 'FB', 'BABA', 'XOM', 'V', 'JPM', 'BAC', 'VZ', 'INTC', 'WFC', 'PFE', 'CSCO', 'T', 'MRK', 'BA', 'TSM', 'KO', 'DIS', 'ORCL', 'CMCSA', 'NFLX', 'C', 'NKE', 'LLY', 'CRM',
  'DWDP', 'NVDA', 'MO', 'PBR-A', 'PBR', 'SBUX', 'GE', 'GILD', 'BMY', 'COP', 'USB', 'SAN', 'MS', 'MDLZ', 'CVS', 'ABEV', 'QCOM', 'FOXA', 'VALE', 'BBD', 'RIO', 'SLB', 'WBA', 'LYG', 'SCHW',
  'BSX', 'GM', 'ITUB', 'OXY', 'TSLA', 'BIIB', 'KMI', 'UBS', 'MU', 'JD', 'KHC', 'ET', 'BBVA', 'AMAT', 'IBN', 'CCL', 'ATVI', 'F', 'WMB', 'BBT', 'EBAY', 'DAL', 'NOK', 'SQ', 'MNST', 'HPQ',
  'AMD', 'SIRI', 'S', 'GOLD', 'TWTR', 'HAL', 'FDC', 'CNC', 'APC', 'HPE', 'NEM', 'FCX', 'CBS', 'TEVA', 'DB', 'IQ', 'FITB', 'LEN', 'KEY', 'DHI', 'FNMA', 'CFG', 'MYL',
];

const collections = [
  '100 Most Popular', 'Upcoming Earnings', 'New On TradeDesk', 'Technology', 'Oil and Gas', 'Finance', 'Software Service', 'Energy', 'Manufacturing', 'Consumer Products', 'ETF', 'Video Games', 'Social Media', 'Health', 'Entertainment', 'Internet', 'Electronic',
  'Semiconductors', 'Pharmaceutical', 'Retail', 'Automotive', 'REIT', 'Banking', 'Food', 'Materials', 'Aerospace',
];

for (let i = 0; i < collections.length; i++) {
  const symbolsArr = [];
  const pricesArr = [];
  const newSymbols = symbols.slice();
  for (let j = 0; j < 7; j++) {
    const index = Math.floor(Math.random() * newSymbols.length);
    symbolsArr.push(newSymbols[index]);
    newSymbols.splice(index, 1);
  }
  for (let k = 0; k < 7; k++) {
    const randomPrice = faker.finance.amount(80, 250, 2);
    pricesArr.push(randomPrice);
  }

  const sampleTags = {
    tag: collections[i],
    symbols: symbolsArr,
    price: pricesArr,
  };

  const insertSampleTags = () => {
    Tag.create(sampleTags)
      .then(() => db.close())
      .catch(err => console.log('errrerererer', err));
  };
  insertSampleTags();
}
