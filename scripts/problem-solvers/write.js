var tmpl = require('../prompts')('problem-solvers/write.tmpl');

module.exports = function(scenario, cb) {
  var prompt = tmpl(scenario);
  cb();
};
