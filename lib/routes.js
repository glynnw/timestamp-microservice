var express = require('express');
var router = express.Router();
var dateformat = require('dateformat');

module.exports = router;

router.get('/:timestamp', function (request, response) {
  var time = new Date(request.params.timestamp);
  var result = { unix: null, natural: null };
  if (time != 'Invalid Date') {
    result = {
      unix: time.getTime(),
      natural: dateformat(time, 'mmmm d, yyyy')
    };
  }
  response.jsonp(result);
});
