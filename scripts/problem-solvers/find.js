var tmpl = require('../prompts')('problem-solvers/find.tmpl');
var findOrCreateHIT = require('../lib/findOrCreateHIT');

module.exports = function(scenario, cb) {
  findOrCreateHIT({
    type: 'people',
    subject: 'problem-solvers',
    scenario: scenario,
    prompt: tmpl({
      scenario: scenario,
      options: scenario['problem-solvers'].people
    })
  }, function(err, hitID){
    cb(err, hitID);
  });
};
