var redis = require('./redis');
var createHIT = require('./mturk/createHIT');

function getHITKey(opt) {
  return 'movement:'+opt.scenario.id+':hits:'+opt.type+':'+opt.subject;
}

function makeHIT(opt, cb) {
  var hitKey = getHITKey(opt);
  var timePerHit = opt.scenario[opt.subject][opt.type]['estimated-seconds-each'];
  var reward = (timePerHit*2)/100;

  var hit = {
    title: 'Online Research',
    description: 'Find contact information for relevant people',
    duration: timePerHit,
    lifetime: opt.scenario.expiration,
    reward: reward
  };
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
      return cb(err, hitID);
    }
    makeHIT(opt, cb);
  });
}
