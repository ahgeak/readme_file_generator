// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license.length !== 0) {
    const licenseString = `${license
      .toString()
      .toLowerCase()
      .split(" ")
      .join("")}`;
    return `![Badge License]: (https://img.shields.io/badge/License-${licenseString}-yellow.svg)
    `;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length !== 0) {
    return `![License Link]: ${license}
    `;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length !== 0) {
    return `## License
  `;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.instalation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
## Tests

${data.tests}

## Questions

If you have questions, you can reach me using the following methods.

GitHub Username: ${data.username}
GitHub Profile: (https://github.com/${data.username})
Email address: ${data.email}
`;
}

module.exports = generateMarkdown;
