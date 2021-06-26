class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return 'Employee'
  }
}

module.exports = Employee

const Jeremy = new Employee('jeremy', 1, 'jhurst16@anymail')
const Terrance = new Employee('Terrance', 2, 'Tm@any')
