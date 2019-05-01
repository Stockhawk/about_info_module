const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: [ '13.52.184.14' ], localDataCenter: 'datacenter1', keyspace: 'about' });

module.exports = client;
