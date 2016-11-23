var express = require('express');
var app = express();
var compression = require('compression');
var dateformat = require('dateformat');

app.use(compression());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (request, response) {
  response.render('index', { host: request.get('Host') });
});

app.get("/:timestamp", function (request, response) {
  var time = new Date(request.params.timestamp);
  var result = { "unix": null, "natural": null };
  if (time != 'Invalid Date') {
    result = {
      "unix": time.getTime(),
      "natural": dateformat(time, 'mmmm d, yyyy')
    }
  }
  response.jsonp(result);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
