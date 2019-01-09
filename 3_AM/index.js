const express = require("express");
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname + '/table.html'));
});

app.get("/images", (req, res) => {
  res.sendFile(path.join(__dirname + '/images.html'));
});

app.get("/lists", (req, res) => {
  res.sendFile(path.join(__dirname + '/lists.html'));
});

app.listen(3000);
console.log("Running at port 3000");
