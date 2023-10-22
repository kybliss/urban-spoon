// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    }, {
        type: 'input',
        message: 'Describe what your project does.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How can your project be installed?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who are the contributors to your project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'How can your project be tested?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubName'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What license does your project have?',
        choices: ['Apache', 'IBM', 'MIT', 'Eclipse'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
function writeToFile(response) {
    const stringifiedResponse = generateMarkdown(response);
    fs.writeFile('README.md', stringifiedResponse, (err) => {
        err ? console.error(err) : console.log(``)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile(answers)
    })
}

// Function call to initialize app
init();
