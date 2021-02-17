const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const { stringify } = require('querystring');
const generateMarkdown = require('./generateMarkdown.js');

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
    console.log(data.appName);
    // const githubAddy = `[link to github](https://github.com/${data.github})`
    // const licenseGet = data.license[0];
    // const githubAddy = `[link to github](https://github.com/${data.github})`
    // const licenseGet = data.license[0];
    // renderLicenseBadge(licenseGet);

 let fileBody = generateMarkdown(data);
    
    
    fs.writeFile("README.md", fileBody , (err) =>
        err ? console.log(err) : console.log("Abra Cadabra, README.md generated!")
    )

})