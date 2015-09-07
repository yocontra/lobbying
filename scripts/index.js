var rdir = require('require-dir');
var async = require('async');
var getBalance = require('./lib/mturk/getBalance');

var config = require('../config');
var solvers = require('./problem-solvers');
var media = require('./media');

async.auto({
  getBalance: getBalance,
  solvers: solvers.bind(null, config.scenario),
  media: media.bind(null, config.scenario)
}, function(err, res){
  if (err) return console.error(err);
  console.log(res);
});
