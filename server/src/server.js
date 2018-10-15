const express = require('express');
const cors = require('cors');
const app = express();

const {connect} = require('./mongo');

const url = 'mongodb://localhost:27017';

const dbName = 'phucam';
const collectionName = 'gospel';

const main = () => {
  connect(
    url,
    dbName,
  )
    .then(db => {
      const gospelCollection = db.collection(collectionName);

      app.use(cors());

      app.get('/', function(req, res) {
        res.send('Hello World');
      });

      app.get('/gospel', (req, res) => {
        gospelCollection.find({}).toArray((err, docs) => {
          if (err) {
            console.error(err);
          }
          res.json(docs);
        });
      });
    })
    .catch(err => {
      console.error('Khong the connect database');
    });
  app.listen(4000, () => {
    console.log('Server is up on port 4000');
  });
};

main();

