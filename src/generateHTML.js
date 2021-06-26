const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

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
        <li class ="list-group-item"> Github Account: ${engineer.getGithub()}</li>
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

















// setup list of what employee is getting added, or none at all
// setup method for each type(engineer manager or intern)
// return to list to choose employee type or none