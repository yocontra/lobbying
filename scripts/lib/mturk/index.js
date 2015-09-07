var mturk = require('mturk-api');
var config = require('../../../config');

module.exports = mturk.connect({
  sandbox: config.mturk.sandbox,
  access: config.mturk.access,
  secret: config.mturk.secret
});
