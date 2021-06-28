const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const intern = new Intern("name", Number, "email");
    expect(intern.getRole()).toBe(role);
  });

  test('can get school', () => {
    const school = 'any'
    const intern = new Intern('name', Number, 'email', school)
    expect(intern.school).toBe(school)
})