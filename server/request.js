const Stock = require('../database/Stock.js');
const Tag = require('../database/Tag.js');

module.exports.findStock = (params) => {
  const upperCaseParams = params.symbol.toUpperCase();
  return Stock.find({ symbol: upperCaseParams }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  });
};


module.exports.findTag = (params) => {
  const splitParams = params.tag.split(',');
  return Tag.find({ tag: { $in: splitParams } }, (err, data) => {
    if (err) {
      console.log('ERRR', err);
    } else {
      return data;
    }
  });
};
