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
  ]
  console.log(create)


// TODO: Create a function to write README file
 function writeToFile() {
  return inquirer.prompt(questions)
  .then((data) => {
   const fileName = 'README.md'
   const mark = create(data)
    fs.writeFile(fileName, mark,(err) =>
    err ? console.log(err) : console.log ('created'))
    // console.log (data)
    return (data)
  })
}
 
writeToFile()
// .then((data) => {
//   const fileName = `README.md`;

//   fs.writeFile(fileName,JSON.stringify(data),(err) =>
//    err ? console.log(err) : console.log('Successfully created README')
//    )
// })

// TODO: Create a function to initialize app
// function init() {}

// //Function call to initialize app
// init();