const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
var ObjectId = require('mongodb').ObjectId;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

const { connect } = require("./mongo");

const url = "mongodb://localhost:27017";

const dbName = "phucam";
const collectionName = "gospel";

const main = () => {
  // Make database connection to MongoDB server.
  connect(
    url,
    dbName
  )
    // When the connection to the MongoDB has been successfull.
    .then(db => {
      // Get the reference to the collection.
      const gospelCollection = db.collection(collectionName);

      // Render default page.
      app.get("/", function(req, res) {
        res.send("Hello World");
      });

      // HTTP GET at /gospel with all of the documents from `gospel` collection.
      app.get("/gospel", (req, res) => {
        gospelCollection.find({}).toArray((err, docs) => {
          if (err) {
            console.error(err);
            // If an error occured, response empty object.
            res.json({});
          }
          // Response all of the documents in the database collection.
          res.json(docs);
        });
      });

      app.delete('/gospel/:id',(req,res ) => {
        const id = req.params.id;
        gospelCollection.deleteOne (
          {_id:ObjectId(id)},
          (err,result) => {
            if (err) throw err;
            res.send("success"+ id);
          }
      );
      });

      app.update('/gospel/')      
      // HTTP POST: Insert a document.
      app.post("/gospel", (req, res) => {
        const color = req.body.color;
        const content = req.body.content;
        gospelCollection.insertOne(
          { color: color, content: content },
          (err, result) => {
            if (err) throw err;
            res.send("Success");
          }
        );
      });
    })
    .catch(err => {
      console.error("Khong the connect database");
    });
  app.listen(4000, () => {
    console.log("Server is up on port 4000");
  });
};

main();
