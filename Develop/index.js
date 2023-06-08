// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description for your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Enter usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter contributions guidelines ?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Enter test instructions?',
      name: 'test',
    },
  
  ]),
  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
