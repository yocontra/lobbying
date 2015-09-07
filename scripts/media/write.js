var tmpl = require('../prompts')('media/write.tmpl');

module.exports = function(scenario, cb) {
  var prompt = tmpl(scenario);
  cb();
};
