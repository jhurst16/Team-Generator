const fs = require('fs')
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern');
const Index = require('../index')

const boilerTop = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>My Team Generator</title>
</head>
<body> 
`
const boilerBottom =
`
</body>
</html>
`;

const generateNewManager = manager => {
    return `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class ="card-title">${manager.name}</h5>
    <p class ="card-text">${manager.getRole()}</p>
    </div>
    <ul class ="list-group list-group-flush">
        <li class ="list-group-item">ID Number: ${manager.id}</li>
        <li class ="list-group-item">Email: ${manager.email}</li>
        <li class ="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
    `;
}

const generateNewEngineer = engineer => {
    return `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class ="card-title">${engineer.name}</h5>
    <p class ="card-text">${engineer.getRole()}</p>
    </div>
    <ul class ="list-group list-group-flush">
        <li class ="list-group-item">ID Number: ${engineer.id}</li>
        <li class ="list-group-item">Email: ${engineer.email}</li>
        <li class ="list-group-item"> Github Account: <a href = "http://www.github.com/">${engineer.getGithub()}</li></a>
        </ul>Office Number
        </div>
    `;
}

const generateNewIntern = intern => {
    return `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class ="card-title">${intern.name}</h5>
    <p class ="card-text">${intern.getRole()}</p>
    </div>
    <ul class ="list-group list-group-flush">
        <li class ="list-group-item">ID Number: ${intern.id}</li>
        <li class ="list-group-item">Email: ${intern.email}</li>
        <li class ="list-group-item"> School: ${intern.getSchool()}</li>
        </ul>
        </div>
    `;
}




const FinalHTML = (newTeamMember) => {
    let createHTML = boilerTop
    for (let i = 0; i < newTeamMember.length; i++) {
        let element = newTeamMember[i];
        // console.log(element)
        if (element instanceof Manager) {
        createHTML = createHTML + generateNewManager(element)
        } else if(element instanceof Engineer){
            createHTML = createHTML + generateNewEngineer(element)
        } else if (element instanceof Intern) {
            createHTML = createHTML + generateNewIntern(element)
        } else {
            console.log('no team members have been added.')
        }
    }
    createHTML = createHTML + boilerBottom
    // console.log(createHTML)
    return createHTML;
}

module.exports = FinalHTML

