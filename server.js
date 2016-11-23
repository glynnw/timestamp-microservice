var express = require('express');
var app = express();
var compression = require('compression');
var routes = require('./lib/routes.js');

app.set('view engine', 'pug');

app.use(compression());
app.use(express.static('public'));
app.use(routes);

app.get('/', function(request, response) {
  response.render('index', { host: request.get('Host') });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Server is listening on port ' + listener.address().port);
});
