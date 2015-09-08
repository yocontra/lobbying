var argv = require('minimist')(process.argv.slice(2));
var inquirer = require('inquirer');

var name = argv._[0];

console.log('Creating project', name);
