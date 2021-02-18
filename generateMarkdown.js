
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

  return response;
}

function renderLicenseSection(data) {
  
  let renderSection = ` ${renderLicenseBadge(data)}${renderLicenseLink(data)}\n`
  console.log(renderSection);
  return renderSection;
}

 function generateMarkdown(data) {
  let githubAddy = `[${data.github}](https://github.com/${data.github})`
  
  return `
  ${renderLicenseSection(data)}\n
# <div align='center'> **${data.appName}** </div>\n
--- \n
--- \n
## **Table Of Contents** \n
---\n
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Review and Contribute](#github)
--- \n

## <div align ='center'> <a name="description:></a> **Description** </div> \n
--- \n
${data.description}\n
--- \n 
## <div align ='center'> <a name="installation"></a> **Installation** </div>
--- \n 
${data.installation}\n
--- \n
## <div align ='center'> <a name="usage"></a> **Usage** </div>\n
--- \n
${data.usage}\n
--- \n
## <div align ='center'> <a name="contributing"></a> **Contributing** </div>\n
--- \n
${data.contributing}\n
--- \n
## <div align ='center'> <a name="tests"></a> **Tests** </div>\n
--- \n
${data.tests}\n
--- \n
## <div align ='center'> <a name="github"></a> **Github and Email** </div>\n
--- \n
##<div align ='center'>**Review and contribute here**</div>\n
### _Github:_ ${githubAddy}\n
\n
### _Email:_ ${data.email}\n
--- \n`;

}

module.exports = generateMarkdown;
