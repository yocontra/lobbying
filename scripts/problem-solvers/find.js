var fs = require('fs');
var path = require('path');
var _template = require('lodash.template');
var config = require('../../config');

var tmplPath = path.join(__dirname, '../prompts/problem-solvers/find.tmpl');
var tmpl = _template(fs.readFileSync(tmplPath, 'utf8'));
