var tmpl = require('../prompts')('media/find.tmpl');

module.exports = function(scenario, cb) {
  var prompt = tmpl(scenario);
  cb();
};
