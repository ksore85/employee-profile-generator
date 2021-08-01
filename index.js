const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")



// Manager Questions
const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide the manager's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter the name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide the manager's employee ID.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter the employee ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide the manager's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter the email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please provide the manager's office number?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("You must enter the office number.")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: "Would you like to add a team member?",
        when: ({officeNumber}) => {
            if (officeNumber) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Which role would you like to add to the team?",
        choices: ['Engineer', 'Intern'],
        when: ({addMember}) => {
            if (addMember) {
                return true;
            } else {
                return false;
            }
        }
    },
]

// Engineer Questions
const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide the engineer's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter the name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide the engineer's employee ID number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter the employee ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide the engineer's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter the email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please provide the engineer's GitHub username.",
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log("You must enter the GitHub username.")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: "Would you like to add a team member?",
        when: ({gitHub}) => {
            if (gitHub) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Which role would you like to add to the team?",
        choices: ['Engineer', 'Intern'],
        when: ({addMember}) => {
            if (addMember) {
                return true;
            } else {
                return false;
            }
        }
    },
]

//Intern Questions
const internQs = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide the intern's name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter the name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide the intern's employee ID number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter the employee ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide the intern's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter the email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("You must enter the school.")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: "Would you like to add a team member?",
        when: ({school}) => {
            if (school) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Which role would you like to add to the team?",
        choices: ['Engineer', 'Intern'],
        when: ({addMember}) => {
            if (addMember) {
                return true;
            } else {
                return false;
            }
        }
    },
]


