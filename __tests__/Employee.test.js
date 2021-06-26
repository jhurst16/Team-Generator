const Employee = require ("../lib/Employee")

test('creates an Employee', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toEqual(expect.any('string'))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any('string'))
    
})