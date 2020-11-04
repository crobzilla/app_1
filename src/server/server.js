const express = require('express');
const path = require('path');
const app = express();
const request = require('request');

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

console.log("Serving on port 9000");
app.listen(9000);