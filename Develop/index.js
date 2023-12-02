// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining your project:",
  },
  {
    type: "input",
    name: "instalation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for using your project:",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators with links to their GitHub profiles:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What license would you like to use for this project?",
    choices: [
      "Apache",
      "Boost",
      "BSD",
      "Creative Commons",
      "Eclipse",
      "GNU",
      "Hippocratic",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "Open Hardware",
      "Open Software",
      "Vim",
      "Unlicense",
      "UPL",
      "Zlib",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions on how to run tests for your program:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address:",
  },
];

// writeToFile writes README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateMarkdown(answers), (err) =>
        err ? console.log(err) : console.log('Succuess! The README markdown file was created!'));
}

// init function initializes app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
        const fileName = `${answers.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, answers);
        }
    );
    
}

// Function call to initialize app
init();
