const express = require("express");
const { getGospel } = require("./index");

const app = express();

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

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})
