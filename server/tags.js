const database = require('../database/connection.js');

module.exports = {

  find: (tags) => {
    tags = tags.split(',');
    let query = '';

    query += 'SELECT * FROM tags WHERE ';
    query += 'tag IN (?, ?, ?, ?, ?, ?, ?)';

    return database.execute(query, tags, { prepare: true });
  },

  insert: (record) => {
    const rowString = JSON.stringify(record);
    const query = 'INSERT INTO tags JSON ?'

    database.execute(query, [ rowString ]);
  },

  update: (tag, record) => {
    const fields = Object.keys(record);
    let query = '';

    query += 'UPDATE tags ';

    for (let i = 0; i < fields.length; i++) {
      query += `SET ${fields[i]} = ${update[fields[i]]}`;
      query += i === fields.length - 1 ? ' ' : ', ';
    }

    query += 'WHERE tag = ?';
    
    database.execute(query, [ tag ]);
  },

  delete: (tag) => {
    let query = '';

    query += 'DELETE * FROM tags WHERE ';
    query += 'tag = ?';
    
    database.execute(query, [ tag ]);
  },

}