#!/usr/bin/env node

var program = require('commander');
var pkg = require('../package.json');

program
  .version(pkg.version)
  .command('create [name]', 'create a political movement')
  .command('monitor [name]', 'monitor a political movement')
  .command('destroy [name]', 'destroy a political movement')
  .command('list', 'list political movements', {isDefault: true})
  .parse(process.argv);
