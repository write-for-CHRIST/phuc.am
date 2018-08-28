const express = require("express");
const { getGospel } = require("./index");
const cors = require('cors')
const app = express();

app.use(cors())

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/gospel", (req, res) => {
  getGospel()
    .then(gospelData => {
      res.json(JSON.stringify(gospelData, null, 2));
    })
    .catch(err => console.error(err));
});

app.listen(4000, () => {
    console.log("Server is up on port 4000")
})
