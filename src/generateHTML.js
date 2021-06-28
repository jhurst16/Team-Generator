const fs = require('fs')
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Index = require('../index')

const boilerTop = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" 
  integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <title>My Team Generator</title>
</head>
<body>
<div class="card">
  <div class="card-body">
    <h5 class="card-title d-flex justify-content-center">My Team!</h5>
  </div>
</div>
<div class="d-flex justify-content-around">
`
const boilerBottom = `
</div>
<script src="../index.js"></script>
</body>
</html>
`

const generateNewManager = (manager) => {
  return `
<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class ="card-title">${manager.name}</h5>
    <p class ="card-text">${manager.getRole()}</p>
    </div>
    <ul class ="list-group list-group-flush">
        <li class ="list-group-item">ID Number: ${manager.id}</li>
        <li class ="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
        <li class ="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
    `
}

const generateNewEngineer = (engineer) => {
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
        </ul>
        </div>
    `
}

const generateNewIntern = (intern) => {
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
    `
}

const FinalHTML = (newTeamMember) => {
  let createHTML = boilerTop
  for (let i = 0; i < newTeamMember.length; i++) {
    let teamClass = newTeamMember[i]
    // console.log(element)
    if (teamClass instanceof Manager) {
      createHTML = createHTML + generateNewManager(teamClass)
    } else if (teamClass instanceof Engineer) {
      createHTML = createHTML + generateNewEngineer(teamClass)
    } else if (teamClass instanceof Intern) {
      createHTML = createHTML + generateNewIntern(teamClass)
    } else {
      console.log('no team members have been added.')
    }
  }
  createHTML = createHTML + boilerBottom
  // console.log(createHTML)
  return createHTML
}

module.exports = FinalHTML
