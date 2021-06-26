const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateHTML = require('./src/generateHTML.js')

const newTeamMember = []

const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'manager',
        message: "What is your team's manager's name? (Required)",
        validate: (managerInput) => {
          if (managerInput) {
            return true
          } else {
            console.log('Please give us the managers name!')
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your employee ID. (Required)',
        validate: (employeeId) => {
          if (employeeId) {
            return true
          } else {
            console.log('Please enter a valid Email!.')
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number.',
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.manager,
        answers.employeeID,
        answers.email,
        answers.officeNumber,
      )
      newTeamMember.push(newManager)
    })
}
const engineerPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineer',
        message: "What is your team's Engineer name? (Required)",
        validate: (engineerInput) => {
          if (engineerInput) {
            return true
          } else {
            console.log("Please give us the engineer's name!")
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your employee ID. (Required)',
        validate: (employeeId) => {
          if (employeeId) {
            return true
          } else {
            console.log('Please enter a valid Email!.')
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username!',
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.engineer,
        answers.employeeID,
        answers.email,
        answers.github,
      )
      newTeamMember.push(newEngineer)
    })
}
const internPrompt = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'intern',
        message: "What is your team's intern's name? (Required)",
        validate: (internInput) => {
          if (internInput) {
            return true
          } else {
            console.log("Please give us the intern's name!")
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter your employee ID. (Required)',
        validate: (employeeId) => {
          if (employeeId) {
            return true
          } else {
            console.log('Please enter you employee ID!')
            return false
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Please enter your School name!',
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.intern,
        answers.employeeID,
        answers.email,
        answers.school,
      )
      newTeamMember.push(newEngineer)
    })
}

const employeeTypes = {
  Manager: managerPrompt,
  Engineer: engineerPrompt,
  Intern: internPrompt,
}

const chooseNewMemberType = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What is the new team members type? (Required)',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    .then((answers) => {
      const employeeType = employeeTypes[answers.type]
      employeeType().then((answers) => {
        return inquirer.prompt([
          {
            type: 'list',
            name: 'continue',
            message: 'Are you adding another new member? (Required)',
            choices: ['Add a new member!', 'I have no more members to add!'],
          },
        ])
        .then((answers) => {
            if (answers.continue === 'Add a new member!') {
                chooseNewMemberType()
            }
            else {
                //generate HTML
                console.log(newTeamMember)
            }
        })
      })
    })
}
chooseNewMemberType()
