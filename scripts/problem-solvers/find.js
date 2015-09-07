var async = require('async');
var tmpl = require('../prompts')('problem-solvers/find.tmpl');
var redis = require('../lib/redis');
var createHIT = require('../lib/mturk/createHIT');

function findOrCreateHIT(scenario, cb) {
  var hitKey = 'political-movement:'+scenario.id+':find-problem-solver-hit';
  var timePerHit = scenario.magnitude * 60; // 1 min per contact
  var reward = (timePerHit * 2) / 100; // 2 cents per minute
  var oneDay = 1000*60*60*24;

  redis.get(hitKey, function(err, hitID){
    if (err) {
      return cb(err);
    }
    if (hitID) {
      return cb(null, hitID);
    }
    var hit = {
      title: 'Creative Research',
      description: 'Find contact information for relevant people',
      duration: timePerHit,
      lifetime: oneDay,
      reward: reward
    };
    createHIT(hit, function(err, hitID){
      if (err) {
        return cb(err);
      }
      redis.set(hitKey, hitID, function(err){
        if (err) {
          return cb(err);
        }
        cb(null, hitID);
      });
    });
  });
}

module.exports = function(scenario, cb) {
  findOrCreateHIT(scenario, function(err, hitID){
    cb(err, hitID);
  });
};
