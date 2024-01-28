// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    //objects of questions
    {
        type: 'input',
        name: 'title',
        message: 'Project Name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
    },
    {
        type: 'input',
        name: 'tableContents',
        message: 'What are your table of contents?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your installation process?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do we use this application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license from list below that you are using',
        choices: ['MIT', 'The Unlicense', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How do we input into this application',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can we test this product?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readme = generateMarkdown(answers);
            console.log(readme);

            writeToFile('README.md', readme);
        })
}
// Function call to initialize app
init();
