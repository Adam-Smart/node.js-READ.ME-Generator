// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const create = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
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
      message: 'Enter usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter installation instructions?',
      name: 'install',
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
    { type: 'list',
      message: 'Licence?',
      name: 'license',
      choices: ['None','Apache License 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2','BSD 3','Boost Software'],
    filter(val){
      return val
    }
    },
    {
      type: 'input',
      message: 'Enter your github username',
      name: 'github'
    },
    {
      type: 'input',
      message: 'Enter your E-Mail',
      name: 'email',
    },


  ]
  


// TODO: Create a function to write README file
 function writeToFile() {
  return inquirer.prompt(questions)
  .then((data) => {
   const fileName = 'README.md'
   const mark = create(data)
    fs.writeFile(fileName, mark,(err) =>
    err ? console.log(err) : console.log ('created'))
    
    return (data)
  })
}
 
writeToFile()
