const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

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
        choice: ['GNU', 'Apache', 'Ms-PL', 'CDDL', 'EPL', 'MIT']
    },
])