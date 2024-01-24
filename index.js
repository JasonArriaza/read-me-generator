// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const mockAnswers = {
        title: 'Project title',
        description: 'project description',
        tableOfcontents: 'the table of contents',
        installation: 'project install',
        usage: 'project usage',
        license: 'license',
        contributing: 'contributing',
        tests: 'test',
        questions: 'question'
    };
    const readme = generateMarkdown(mockAnswers);
    console.log(readme);
}

// Function call to initialize app
init();
