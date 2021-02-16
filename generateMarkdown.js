// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU':
      response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;
    case 'Apache' :
      response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
      break;
    case 'PERL' :
      response = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
      break;
    case 'IBM' :
      response = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]';
      break;
    case 'EPL' :
      response = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
      break;
    case 'MIT' :
      response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    default:
      response = '';
  }
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = renderLicenseBadge;
