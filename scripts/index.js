var rdir = require('require-dir');

var solvers = rdir(__dirname + '/problem-solvers');
var media = rdir(__dirname + '/media');

solvers.find(function(err, solvers){
  console.log(err, solvers);
});
