var mturk = require('./');

module.exports = function(opt, cb) {
  mturk.then(sendRequest).catch(cb);

  function sendRequest(api){
    var hit = {
      Title: opt.title,
      Description: opt.description,
      AssignmentDurationInSeconds: opt.duration,
      LifetimeInSeconds: opt.lifetime
    }
    api.req('CreateHIT', hit).then(function(res){
      cb(null, res);
    }).catch(cb);
  }
};
