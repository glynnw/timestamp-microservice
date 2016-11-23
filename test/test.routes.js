var request = require('supertest');
var chai = require('chai');
var express = require('express');
var routes = require('../lib/routes.js');

var expect = chai.expect;
var app = express();
app.use(routes);


describe('GET /:timestamp', function() {
  describe('with a correct date', function() {
    it('returns {"unix":1451628000000,"natural":"January 1, 2016"} for /January 1, 2016', function(done) {
      request(app).get('/January 1, 2016')
        .expect(200, {
          unix: 1451628000000,
          natural: "January 1, 2016"
        }, done);
    });

    it('returns {"unix":1451628000000,"natural":"January 1, 2016"} for /1451628000000', function(done) {
      request(app).get('/January 1, 2016')
        .expect(200, {
          unix: 1451628000000,
          natural: "January 1, 2016"
        }, done);
    });
  });

  describe('with incorrect date', function() {
    it('returns { unix: null, natural: null } for /Monday', function(done) {
      request(app).get('/Monday')
        .expect(200, {
          unix: null,
          natural: null
        }, done);
    });
  });
});
