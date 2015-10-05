'use strict';

var units = {
  μs : 1,
  ms : 1000,
  s  : 1000 * 1000,
  m  : 1000 * 1000 * 60,
  h  : 1000 * 1000 * 60 * 60,
  d  : 1000 * 1000 * 60 * 60 * 24,
  w  : 1000 * 1000 * 60 * 60 * 24 * 7
};

module.exports = parse;

function parse(string, returnUnit) {
  returnUnit = returnUnit || 'ms';

  var totalMicroseconds = 0;

  var groups = string
    .toLowerCase()
    .match(/[-+]?[0-9\.]+[a-z]+/g);


  if (groups !== null) {
    groups.forEach(function (g) {
      var value = g.match(/[0-9\.]+/g)[0];
      var unit = g.match(/[a-z]+/g)[0];

      totalMicroseconds += getMicroseconds(value, unit);
    });
  }

  return totalMicroseconds / units[returnUnit];
}

function getMicroseconds(value, unit) {
  var result = units[unit];

  if (result) {
    return value * result;
  }

  throw new Error('The unit "' + unit + '" could not be recognized');
}
