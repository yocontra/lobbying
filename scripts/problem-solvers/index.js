var async = require('async');
var find = require('./find');
var write = require('./write');

module.exports = function(scenario, cb) {
  async.parallel({
    problemSolvers: find.bind(null, scenario),
    complaints: write.bind(null, scenario)
  }, cb);
};
