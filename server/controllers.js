const database = require('../database/connection.js');

module.exports.quotes = {
  get: (req, res) => {
    const symbol = req.params.symbol;
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'SELECT * FROM stocks WHERE ';
    query += 'prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    database.execute(query, keys, { prepare: true })
    .then(results => res.send(results.rows))
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {},
}

module.exports.tags = {
  get: (req, res) => {
    let tags = req.params.tags.split(',');
    let query = '';

    query += 'SELECT * FROM tags WHERE ';
    query += 'tag IN (?, ?, ?, ?, ?, ?, ?)';

    database.execute(query, tags, { prepare: true })
    .then(results => res.send(results.rows))
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {},
}