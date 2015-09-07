var async = require('async');
var find = require('./find');
var write = require('./write');

module.exports = function(scenario, cb) {
  async.parallel({
    people: find.bind(null, scenario),
    letters: write.bind(null, scenario)
  }, cb);
};
