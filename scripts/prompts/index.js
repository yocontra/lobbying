var fs = require('fs');
var path = require('path');
var _template = require('lodash.template');
var forEach = require('lodash.forEach');

module.exports = function(p) {
  var tmplPath = path.join(__dirname, '../prompts/' + p);
  return _template(fs.readFileSync(tmplPath, 'utf8'), {
    imports: {
      forEach: forEach
    }
  });
};
