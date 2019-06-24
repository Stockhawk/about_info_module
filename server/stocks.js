const database = require('../database/connection.js');

module.exports = {

  find: (symbol) => {
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'SELECT * FROM stocks WHERE ';
    query += 'prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    return database.execute(query, keys, { prepare: true });
  },

  insert: (stock) => {
    const rowString = JSON.stringify(stock);
    const query = 'INSERT INTO stocks JSON ?'

    return database.execute(query, [ rowString ]);
  },

  update: (symbol, stock) => {
    const fields = Object.keys(stock);
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'UPDATE stocks ';

    for (let i = 0; i < fields.length; i++) {
      query += `SET ${fields[i]} = ${update[fields[i]]}`;
      query += i === fields.length - 1 ? ' ' : ', ';
    }

    query += 'WHERE prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    return database.execute(query, keys);
  },

  delete: (symbol) => {
    const keys = [ symbol[0], symbol[1], symbol[2], symbol.slice(3) ];
    let query = '';

    query += 'DELETE * FROM stocks WHERE ';
    query += 'prefix1 = ? AND prefix2 = ? ';
    query += 'AND prefix3 = ? AND suffix = ?';
    
    return database.execute(query, keys);
  },

}