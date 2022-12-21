const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

//Empty array to store the team inputs
const teamArray = []; 

const addManager = () => { 
    return inquirer
    .prompt([
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
    ])
.then(managerData => {
    const {name, id, email, number} = managerData;
    const manager = new Manager (name, id, email, number);
    teamArray.push(manager);

})
};


//Adding employee either engineer or intern 
function addNewEmployee(){
    return inquirer
    .prompt([
{
    type:'list',
    name: 'role',
    message: 'Do you want to add engineer or intern?',
    choices: ['Engineer', 'Intern', 'Finish building my team'],
},
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name?',
    },
    {
        type: 'input',
        name:'id',
        message: 'Enter your id?',
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email id?',
    },
    {
        type:'input',
        name:'github',
        message:'Enter your github username?',
        when: (input) => input.role === "Engineer",
    },
    {
        type:'input',
        name:'school',
        message: 'Enter your school name?',
        when: (input) => input.role === "Intern",
    },
    {
        type: 'confirm',
        name: 'finish',
        message: 'Would you like to add more?',
    }
])
.then(employeeData => {

    let { name, id, email, role, github, school } = employeeData;
    let employee;
    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
    } else if(role === "Intern") {
        employee = new Intern (name, id, email, school);
        console.log(employee);
    } 

    teamArray.push(employee);
})

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        err ? console.log(err) : console.log('Team profile generated!')
    })
}

addManager()
.then(addNewEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(finalpage => {
    return writeFile(finalpage);
})
.catch(err => {
    console.log(err);
});








