const Manager = require("../lib/Manager");

test("getRole() should return \"Manager\"", () => {
    const role = "Manager";
    const manager = new Manager("name", Number, "email");
    expect(manager.getRole()).toBe(role);
  });

  test('can get office number', () => {
    const officeNumber = Number
    const manager = new Manager('name', Number, 'email', officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
})