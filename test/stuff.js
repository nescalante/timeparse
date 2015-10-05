'use strict';

var tp = require('../index.js');
var assert = require('assert');

describe('timeparse', function() {
  it('should parse a time', function() {
    assert.equal(tp('1s'), 1000);
    assert.equal(tp('1m'), 60000);
    assert.equal(tp('5m'), 300000);
    assert.equal(tp('1h'), 3600000);
    assert.equal(tp('1d'), 86400000);
    assert.equal(tp('1w'), 604800000);
    assert.equal(tp('2m2s'), 122000);
  });

  it('should respect return unit specification', function() {
    assert.equal(tp('1s', 'ms'), 1000);
    assert.equal(tp('1m', 's'), 60);
    assert.equal(tp('5m', 'μs'), 300000000);
    assert.equal(tp('1h', 'm'), 60);
    assert.equal(tp('1d', 'h'), 24);
    assert.equal(tp('1w', 'ms'), 604800000);
    assert.equal(tp('2m2s', 's'), 122);
  });
});
