// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) =>
        console.log(answers)
    //     const readmePageContent = generateMarkdown(answers);
    //     fs.writeToFile(); //I need to write this function still
    );
    
}

// Function call to initialize app
init();
