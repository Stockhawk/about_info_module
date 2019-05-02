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

  post: (req, res) => {
    const rowString = JSON.stringify(req.body);
    const query = 'INSERT INTO stocks JSON ?'

    database.execute(query, [ rowString ])
    .then(() => res.status(201).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  put: (req, res) => {
    const update = req.body;
    const fields = Object.keys(update);
    const symbol = req.params.symbol;
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'UPDATE stocks ';

    for (let i = 0; i < fields.length; i++) {
      query += `SET ${fields[i]} = ${update[fields[i]]}`;
      query += i === fields.length - 1 ? ' ' : ', ';
    }

    query += 'WHERE prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    database.execute(query, keys)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  delete: (req, res) => {
    const symbol = req.params.symbol;
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'DELETE * FROM stocks WHERE ';
    query += 'prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    database.execute(query, keys)
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

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

  post: (req, res) => {
    const rowString = JSON.stringify(req.body);
    const query = 'INSERT INTO tags JSON ?'

    database.execute(query, [ rowString ])
    .then(() => res.status(201).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  put: (req, res) => {
    const update = req.body;
    const fields = Object.keys(update);
    const tag = req.params.tags;
    let query = '';

    query += 'UPDATE tags ';

    for (let i = 0; i < fields.length; i++) {
      query += `SET ${fields[i]} = ${update[fields[i]]}`;
      query += i === fields.length - 1 ? ' ' : ', ';
    }

    query += 'WHERE tag = ?';
    
    database.execute(query, [ tag ])
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

  delete: (req, res) => {
    const tag = req.params.tags;
    let query = '';

    query += 'DELETE * FROM tags WHERE ';
    query += 'tag = ?';
    
    database.execute(query, [ tag ])
    .then(() => res.status(202).end())
    .catch(error => {
      console.error(error);
      res.status(500).end();
    });
  },

}