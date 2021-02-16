const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseBadge = require('./generateMarkdown.js');
const Choices = require('inquirer/lib/objects/choices');
const { stringify } = require('querystring');

inquirer.prompt([
    {
        type: 'input',
        name: 'appName',
        message: 'What is the name of your app?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your app'  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contributing guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'which licence would you like to attach?',
        choices: ['GNU', 'Apache', 'PERL', 'IBM', 'EPL', 'MIT']
    },
]).then((data) => {
    console.log(data);
    const githubAddy = `[link to github](https://github.com/${data.github})`
    const licenseGet = data.license[0];
    renderLicenseBadge(licenseGet);

fileBody = `${response}\n
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
--- \n`
    
    
    fs.writeFile("README.md", fileBody , (err) =>
        err ? console.log(err) : console.log("Abra Cadabra, README.md generated!")
    )

})