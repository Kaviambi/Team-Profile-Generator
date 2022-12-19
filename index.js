const generatedhtml = require('./src/generatedhtml')

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const teamArray = []; 

const manager = [
        {
            //Manager name 
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
        },

        {
            //Manager's id
            type: 'input',
            name: 'id',
            message: 'Enter your manager ID?',

        },
        {
            //Manager's Email
            type: 'input',
            name: 'email',
            message: 'Enter your manager Email ID?',
        },

        {
            //Manager's number 
            type: 'input',
            name: 'number',
            message: 'Enter your manager Phone Number?',
        }
    ];

//  .then(managerDetail => {
//     //multiple varaibles 
//         const {name, id, email, number} = managerDetail;
//         const manager = new Manager (name, id, email, number );
//         //push the manager's detail to the array
//         teamArray.push(manager);
//  })


//Adding employee either engineer or intern 
const employee = [
{
    type:'list',
    name: 'role',
    message: 'Do you want to add engineer or intern?',
    choices: ['Engineer', 'Intern', 'Finish building my team'],
},
];

const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is engineer name?',
},

{
    type: 'input',
    name: 'id',
    message: 'what is the engineer id?',
},

{
    type:'input',
    name: 'email',
    message: 'What is engineer email id?',
},

{
    type: 'input',
    name: 'github',
    message: 'What is engineer github username?',
},
];

const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern email id?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Which school does intern atten?',
    },
];


