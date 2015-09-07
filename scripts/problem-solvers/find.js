var tmpl = require('../prompts')('problem-solvers/find.tmpl');

module.exports = function(scenario, cb) {
  var prompt = tmpl(scenario);
  cb();
};
