'use strict';

var units = {
  s: 1,
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  w: 60 * 60 * 24 * 7
};

module.exports = parse;

function parse(string, returnUnit) {
  var totalSeconds = 0;

  var groups = string
    .toLowerCase()
    .replace(/[^\.\w+-]+/g, '')
    .match(/[-+]?[0-9]+[a-z]+/g);

  if (groups !== null) {
    groups.forEach(function (g) {
      var value = g.match(/[0-9]+/g)[0];
      var unit = g.match(/[a-z]+/g)[0];

      totalSeconds += getSeconds(value, unit);
    });
  }

  return totalSeconds * 1000;
}

function getSeconds(value, unit) {
  var result = units[unit];

  if (result) {
    return value * result;
  }

  throw new Error('The unit "' + unit + '" could not be recognized');
}