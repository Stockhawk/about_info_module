const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const stockSchema = new mongoose.Schema({
  symbol: String,
  equity: Number,
  cost: Number,
  shares: Number,
  TR: Number,
  PD: Number,
  CEO: String,
  employees: Number,
  HQc: String,
  HQs: String,
  founded: Number,
  MC: Number,
  PER: Number,
  AV: Number,
  description: String,
  high: Number,
  low: Number,
  open: Number,
  volume: Number,
  yearHigh: Number,
  yearLow: Number,
  tags: Array,
});

const Stock = mongoose.model('stock', stockSchema);

module.exports = Stock;
