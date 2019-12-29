'use strict';

const { MongoClient } = require('mongodb');

module.exports = (url, cb) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true  });
    client.connect(err => {
        cb(err, client);
    });
};