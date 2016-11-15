// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

app.get("/:timestamp", function (request, response) {
  let time = new Date(request.params.timestamp);
  let result = {
    "unix": time.getTime(),
    "natural": time.toLocaleString()
  }
  response.jsonp(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});