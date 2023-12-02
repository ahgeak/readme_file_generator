// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null){
    return `![Badge License]: (https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== null) {
    return `![License Link]: ${license}`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== null) {
  return `## License`;
 }
 return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

${data.instalation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
