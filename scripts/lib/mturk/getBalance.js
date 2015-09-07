var mturk = require('./');

module.exports = function(cb) {
  mturk.then(sendRequest).catch(cb);

  function sendRequest(api){
    api.req('GetAccountBalance').then(function(res){
      cb(null, res);
    }).catch(cb);
  }
};
