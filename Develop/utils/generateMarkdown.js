// renderLicenseBadge returns a license badge based on which license is passed in; if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license.length !== 0) {
    const licenseString = `${license
      .toString()
      .toLowerCase()
      .split(" ")
      .join("")}`;
    return `![License]: (https://img.shields.io/badge/License-${licenseString}-yellow.svg)
    `;
  }
  return "";
}

// renderLicenseLink returns the license link; if there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license.length !== 0) {
    return `![License]: ${license}
    `;
  }
  return "";
}

// renderLicenseSection returns the license section of README; if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length !== 0) {
    return `## License
  `;
  }
  return "";
}

// generateMarkdown generates markdown for README
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
