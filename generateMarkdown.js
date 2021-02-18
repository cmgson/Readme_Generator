// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(data) {
  console.log(data)
  switch (data.license[0]) {
    case 'GNU' :
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
  console.log(response);
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  switch (data.license[0]) {
  case 'GNU' :
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
// let linkToLicense = response;
// return linkToLicense;
console.log(response);
return response;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  // renderLicenseLink();
  // renderLicenseBadge();
  
  let renderSection = ` ${renderLicenseBadge(data)}${renderLicenseLink(data)}\n`
  console.log(renderSection);
  return renderSection;
}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
console.log(data.license[0]);
  let githubAddy = `[link to github](https://github.com/${data.github})`
  

  

  return `
  ${renderLicenseSection(data)}\n
# ${data.appName}\n
--- \n
## Description: ${data.description}\n
--- \n 
## Installation: ${data.installation}\n
--- \n
## Usage: ${data.usage}\n
--- \n
## Contributing: ${data.contributing}\n
--- \n
## Tests: ${data.tests}\n
--- \n
## github: \n ${githubAddy}\n
--- \n
## email: ${data.email}\n
--- \n
  

`;

}

module.exports = generateMarkdown;
