const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;


const tagsSchema = new mongoose.Schema({
  tag: String,
  symbols: Array,
  price: Array,
});

const Tag = mongoose.model('tag', tagsSchema);


module.exports = Tag;
