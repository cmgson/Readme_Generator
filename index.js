const inquirer = require('inquirer');
const fs = require('fs');
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
        choices: ['GNU', 'Apache', 'Ms-PL', 'CDDL', 'EPL', 'MIT']
    },
]).then((responses) => {
    console.log(responses);
    fileBody = `this should work ${responses}`;
    
    
    fs.writeFile("README.md", fileBody , (err) =>
        err ? console.log(err) : console.log("File written!")
    )

})