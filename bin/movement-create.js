var argv = require('minimist')(process.argv.slice(2));
var inquirer = require('inquirer');
var chalk = require('chalk');

var name = argv._[0];

var questions = [
  {
    name: 'location',
    type: 'input',
    message: 'What location does your issue concern?'
  },
  {
    name: 'problem',
    type: 'input',
    message: 'What problem needs solving?'
  },
  {
    name: 'magnitude',
    type: 'list',
    choices: [
      'Neigborhood',
      'City',
      'County',
      'State',
      'National'
    ],
    message: 'How large is the scale of the problem?'
  },
  {
    name: 'confirmed',
    type: 'confirm',
    message: 'Estimated cost is $15.00. OK?'
  }
];

inquirer.prompt(questions, function(answers){
  console.log('The political movement', chalk.blue.bold(name), 'was created!');
  console.log('Use', chalk.blue.bold('movement status "'+name+'"'), 'to stay updated.');
});
