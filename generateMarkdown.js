// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseGet) {
  switch (licenseGet) {
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
function renderLicenseLink(licenseGet) {switch (licenseGet) {
  case 'GNU':
    response = '(https://www.gnu.org/licenses/gpl-3.0)';
    break;
  case 'Apache' :
    response = '(https://opensource.org/licenses/Apache-2.0)';
    break;
  case 'PERL' :
    response = '(https://opensource.org/licenses/Artistic-2.0)'
    break;
  case 'IBM' :
    response = '(https://opensource.org/licenses/IPL-1.0)';
    break;
  case 'EPL' :
    response = '(https://opensource.org/licenses/EPL-1.0)';
    break;
  case 'MIT' :
    response = '(https://opensource.org/licenses/MIT)';
    break;
  default:
    response = '';
}
let linkToLicense = response;
return linkToLicense;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  renderLicenseBadge();
  renderLicenseLink();
  let renderSection = `# ${response}${linkToLicense}\n`
  return renderSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection();
  // let githubAddy = `[link to github](https://github.com/${data.github})`
    // let licenseGet = data.license[0];

  

  return `#
  ${renderSection}\n
# app name: ${data.appName}\n
--- \n
## description: ${data.description}\n
--- \n 
## installation: ${data.installation}\n
--- \n
## usage: ${data.usage}\n
--- \n
## contributing: ${data.contributing}\n
--- \n
## tests: ${data.tests}\n
--- \n
## github: ${githubAddy}\n
--- \n
## email: ${data.email}\n
--- \n
  

`;

}

module.exports = generateMarkdown;
