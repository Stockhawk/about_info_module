const redis = require('redis');
const cache = redis.createClient();

const stocks = require('./stocks.js');
const tags = require('./tags.js');

module.exports.quotes = {

  get: (req, res) => {
    const symbol = req.params.symbol;
    
    cache.get(symbol, (error, reply) => {
      if (error) {
        console.error(error);
        res.status(500).end();
      } else if (reply) {
        res.send(reply);
      } else {
        stocks.find(symbol)
        .then(results => {
          cache.set(symbol, JSON.stringify(results.rows));
          res.send(results.rows);
        })
        .catch(error => {
          console.error(error);
          res.status(500).end();
        });
      }
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
    const tagString = req.params.tags;

    cache.get(tagString, (error, reply) => {
      if (error) {
        console.error(error);
        res.status(500).end();
      } else if (reply) {
        res.send(reply);
      } else {
        tags.find(req.params.tags)
        .then(results => {
          cache.set(tagString, JSON.stringify(results.rows));
          res.send(results.rows);
        })
        .catch(error => {
          console.error(error);
          res.status(500).end();
        });
      }
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