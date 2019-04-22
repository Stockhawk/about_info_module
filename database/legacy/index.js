const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/infoModule';

mongoose.connect(mongoUri);

const db = mongoose.connection;

module.exports = db;

// 172.17.0.3
