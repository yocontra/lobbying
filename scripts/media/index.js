var async = require('async');
var find = require('./find');
var write = require('./write');

module.exports = function(scenario, cb) {
  async.parallel({
    media: find.bind(null, scenario),
    emails: write.bind(null, scenario)
  }, cb);
};
