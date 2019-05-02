const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: [ '13.56.19.176' ], localDataCenter: 'datacenter1', keyspace: 'about' });

module.exports = client;
