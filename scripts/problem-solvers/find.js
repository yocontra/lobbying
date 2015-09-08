var findOrCreateHIT = require('../lib/findOrCreateHIT');

module.exports = function(scenario, cb) {
  findOrCreateHIT({
    type: 'find',
    subject: 'problem-solvers',
    scenario: scenario,
    options: scenario['problem-solvers'].find
  }, function(err, hitID){
    cb(err, hitID);
  });
};
