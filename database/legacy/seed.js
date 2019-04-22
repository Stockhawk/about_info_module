const faker = require('faker');
const db = require('./index.js');
const Stock = require('./Stock.js');

const symbols = [
  'MSFT', 'AAPL', 'FB', 'BABA', 'XOM', 'V', 'JPM', 'BAC', 'VZ', 'INTC', 'WFC', 'PFE', 'CSCO', 'T', 'MRK', 'BA', 'TSM', 'KO', 'DIS', 'ORCL', 'CMCSA', 'NFLX', 'C', 'NKE', 'LLY', 'CRM',
  'DWDP', 'NVDA', 'MO', 'PBR-A', 'PBR', 'SBUX', 'GE', 'GILD', 'BMY', 'COP', 'USB', 'SAN', 'MS', 'MDLZ', 'CVS', 'ABEV', 'QCOM', 'FOXA', 'VALE', 'BBD', 'RIO', 'SLB', 'WBA', 'LYG', 'SCHW',
  'BSX', 'GM', 'ITUB', 'OXY', 'TSLA', 'BIIB', 'KMI', 'UBS', 'MU', 'JD', 'KHC', 'ET', 'BBVA', 'AMAT', 'IBN', 'CCL', 'ATVI', 'F', 'WMB', 'BBT', 'EBAY', 'DAL', 'NOK', 'SQ', 'MNST', 'HPQ',
  'AMD', 'SIRI', 'S', 'GOLD', 'TWTR', 'HAL', 'FDC', 'CNC', 'APC', 'HPE', 'NEM', 'FCX', 'CBS', 'TEVA', 'DB', 'IQ', 'FITB', 'LEN', 'KEY', 'DHI', 'FNMA', 'CFG', 'MYL',
];

const MC = [
  904.63, 880.76, 478.55, 461.61, 342.84, 341.20, 327.26, 262.27, 250.40, 240.32, 222.60,
  235.50, 234.32, 228.66, 214.03, 209.07, 208.36, 199.39, 197.99, 182.09, 179.36, 157.16, 143.28,
  131.22, 127.11, 122.89, 119.90, 107.18, 106.77, 106.41, 103.09, 90.73, 87.96, 81.90, 78.92, 77.77,
  77.62, 75.37, 71.56, 71.90, 71.84, 69.91, 70.19, 22.96, 68.19, 69.39, 64.43, 59.66, 58.41, 59.33,
  56.71, 52.44, 51.96, 82.24, 50.28, 46.24, 45.81, 45.47, 43.87, 44.62, 41.69, 40.11, 40.02, 38.62,
  37.62, 37.14, 35.75, 35.46, 34.94, 34.64, 34.62, 33.75, 33.21, 32.89, 31.02, 30.21, 29.33, 27.78,
  27.01, 26.10, 25.57, 25.27, 24.84, 24.22, 22.66, 22.45, 20.98, 18.94, 18.40, 17.66, 17.35, 17.31,
  16.58, 16.20, 15.71, 15.54, 15.53, 15.43, 14.83, 14.53,
];

const AV = [
  30.35, 33.05, 21.07, 13.61, 13.67, 8.82, 14.35, 64.57, 15.29, 24.58, 20.60, 25.79,
  21.85, 33.73, 11.42, 6.75, 8.30, 17.18, 10.28, 16.44, 21, 10.26, 18.14, 6.83, 16.95,
  5.80, 11.88, 16.67, 12.79, 8.12, 17.01, 11.42, 111.76, 7.65, 19.09, 6.54, 6.75, 7.75,
  12.92, 8.08, 13.06, 31.10, 14.64, 9.33, 35.61, 13.75, 2.92, 11.55, 5.86, 8.74, 6.71,
  7.29, 10.15, 19.30, 4.59, 8.55, 1.77, 16.44, 3.05, 34.27, 17.90, 12.46, 12.07, 3.47,
  11.37, 6.88, 3.87, 13.33, 44.77, 8.54, 6.00, 13.26, 8.08, 27.75, 14.38, 3.94, 11.88,
  85.96, 27.88, 12.98, 9.16, 19.26, 10.15, 14.99, 3.27, 5.34, 11.45, 10.71, 22.41,
  3.19, 10.3, 5.34, 10.14, 7.21, 3.88, 13.07, 6.42, 9.16, 4.88, 5.55,
];

const collections = [
  '100 Most Popular', 'Upcoming Earnings', 'New On TradeDesk', 'Technology', 'Oil and Gas', 'Finance', 'Software Service', 'Energy', 'Manufacturing', 'Consumer Products', 'ETF', 'Video Games', 'Social Media', 'Health', 'Entertainment', 'Internet', 'Electronic',
  'Semiconductors', 'Pharmaceutical', 'Retail', 'Automotive', 'REIT', 'Banking', 'Food', 'Materials', 'Aerospace',
];


for (let i = 0; i < 100; i++) {
  const todayHigh = faker.finance.amount(50, 300, 2);
  const collectionsArr = [];
  const newCollections = collections.slice();
  for (let j = 0; j < 7; j++) {
    const index = Math.floor(Math.random() * newCollections.length);
    collectionsArr.push(newCollections[index]);
    newCollections.splice(index, 1);
  }
  const sampleStocks = {
    symbol: symbols[i],
    equity: faker.finance.amount(5000, 20000, 2),
    cost: faker.finance.amount(2000, 10000, 2),
    shares: faker.random.number(300),
    TR: faker.finance.amount(100, 2000, 2),
    PD: faker.finance.amount(0, 100, 2),
    CEO: faker.name.findName(),
    employees: faker.random.number({ min: 300, max: 20000 }),
    HQc: faker.address.city(),
    HQs: faker.address.state(),
    founded: faker.random.number({ min: 1880, max: 2010 }),
    MC: MC[i],
    PER: faker.finance.amount(10, 90, 2),
    AV: AV[i],
    description: faker.lorem.paragraphs(3),
    high: todayHigh,
    low: (parseInt(todayHigh) - 3.86),
    open: (parseInt(todayHigh) - 1.39),
    volume: faker.finance.amount(1, 40, 2),
    yearHigh: (parseInt(todayHigh) + 34.68),
    yearLow: (parseInt(todayHigh) - 28.03),
    tags: collectionsArr,
  };
  const insertSampleStocks = () => {
    Stock.create(sampleStocks)
      .then(() => db.close())
      .catch(err => console.log('errrerererer', err));
  };
  insertSampleStocks();
}
