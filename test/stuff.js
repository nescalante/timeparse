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
});