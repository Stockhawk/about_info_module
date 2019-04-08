const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;


const tagsSchema = new mongoose.Schema({
  tag: String,
  symbols: Array,
  price: Array,
});

const Tag = mongoose.model('tag', tagsSchema);

const findTag = (params) => {
  const splitParams = params.tag.split(',');
  return Tag.find({ tag: { $in: splitParams } }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  })};


module.exports = Tag;
module.exports = findTag;
