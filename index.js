const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const newTeamMember = []

const generateHTML = require('./src/generateHTML.js')

const addNewMemberLog = () => {
    console.log ("Please choose to add a new team member, or choose 'I'm done' if youre team is complete!")
}

const managerPrompt = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: "What is your team manager's name? (Required)",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('Please give us the managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee ID. (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid Email!.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number.'
        },
    ])
        .then((answers) => {
            const newManager = new Manager(answers.manager, answers.employeeID, answers.email, answers.officeNumber)
            newTeamMember.push(newManager)
            addNewMemberLog()
        })
};
managerPrompt()