const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('Unit testing the /card/{id} route', function() {

    it('should return OK status', function() {
      return request(app)
        .get('/api/card/2')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });
    it('should return NOT FOUND status', function() {
        return request(app)
          .get('/api/card/-1')
          .then(function(response){
              assert.equal(response.status, 404)
          })
      });
});
