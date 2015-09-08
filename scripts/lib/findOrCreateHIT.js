var redis = require('./redis');
var createHIT = require('./mturk/createHIT');
var loadPrompt = require('../prompts');

function getHITKey(opt) {
  return 'movement:'+opt.scenario.id+':hits:'+opt.type+':'+opt.subject;
}

function makeHIT(opt, cb) {
  var hitKey = getHITKey(opt);
  var centsPerMinute = opt.scenario['cents-per-minute'];
  var timePerHit = opt.options['estimated-seconds-each'];
  var minsPerHit = timePerHit / 60;
  var reward = minsPerHit * centsPerMinute;

  var tmpl = loadPrompt(opt.subject+'/'+opt.type+'.tmpl');
  var prompt = tmpl({
    scenario: opt.scenario,
    options: opt.options
  });
  var hit = {
    title: 'Online Research',
    description: 'Find contact information for relevant people',
    duration: timePerHit,
    lifetime: opt.scenario.expiration,
    reward: reward
  };
  console.log(hit);
  createHIT(hit, function(err, hitID){
    if (err) {
      return cb(err);
    }
    redis.set(hitKey, hitID, function(err){
      cb(err, hitID);
    });
  });
}

module.exports = function(opt, cb) {
  var hitKey = getHITKey(opt);
  redis.get(hitKey, function(err, hitID){
    if (err || hitID) {
      //return cb(err, hitID);
    }
    makeHIT(opt, cb);
  });
}
