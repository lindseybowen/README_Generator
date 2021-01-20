const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your the name of your project?',
    },
    {
        type: 'input',
        name:'description',
        message: "Please provide a description of your project.",
    },
    {
        type: 'input',
        name:'url',
        message: "Please provide the URL or a demo of your deployed application.",
    },
    {
        type: 'input',
        name:'image',
        message: "Please provide an image link of your deployed application.",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does a developer need to do to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you want the user to know before using your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'In what ways would you like other developers to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run an automated test for your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to assign your application?',
        choices: ['MIT', 'AGPL','GPL']
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'What is your Github username so other developers can contact you with questions?',
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'What is your email so other developers can contact you with questions?',
    }
