// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    }, 
    {
        type: 'input',
        message: 'What is a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What can your project be used for?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license are you using?"',
        name: 'license',
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License V3.0",
            "MIT License"
        ]
    },
    {
        type: 'input',
        message: 'What are the contribution guidlines?',
        name: 'contribution',
    }, 
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your github account?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('write file success')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
        writeToFile("README", response),
    );
}

// Function call to initialize app
init();
