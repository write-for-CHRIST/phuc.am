const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

/**
 * Connect to MongoDB server
 */
const connect = (url, dbName) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      url,
      (err, client) => {
        if (err) {
          reject(err);
        }
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        resolve(db);
      },
    );
  });
};

module.exports = {
  connect,
};
