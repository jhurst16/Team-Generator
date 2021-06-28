const { TestWatcher } = require("@jest/core")
const Employee = require("../lib/Employee")

test('can create employee', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
})
test('can get name', () => {
    const name = 'name'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})
test('can get ID', () => {
    const Id = Number
    const employee = new Employee('name', Id)
    expect(employee.id).toBe(Id)
})
test('can get email', () => {
    const email = 'string'
    const employee = new Employee('name', Number, email)
    expect(employee.email).toBe(email)
})
test("getRole() should return \"Employee\"", () => {
    const role = "Employee";
    const employee = new Employee("name", Number);
    expect(employee.getRole()).toBe(role);
  });