const stocks = require('./stocks.js');
const tags = require('./tags.js');

module.exports.quotes = {

  get: (req, res) => {
    const symbol = req.params.symbol;
    
    stocks.find(symbol)
    .then(results => res.send(results.rows))
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  post: (req, res) => {
    stocks.insert(req.body)
    .then(() => res.status(201).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  put: (req, res) => {
    stocks.update(req.params.symbol, req.body)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  delete: (req, res) => {
    stocks.delete(req.params.symbol)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

}

module.exports.tags = {

  get: (req, res) => {
    tags.find(req.params.tags)
    .then(results => res.send(results.rows))
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  post: (req, res) => {
    tags.insert(req.body)
    .then(() => res.status(201).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  put: (req, res) => {
    tags.update(req.params.tags, req.body)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  delete: (req, res) => {
    tags.delete(req.params.tags)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

}