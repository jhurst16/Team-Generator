const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const engineer = new Engineer("name", Number, "string");
    expect(engineer.getRole()).toBe(role);
  });

  test('can get github name', () => {
    const user = 'string'
    const engineer = new Engineer("name", Number, 'email', user)
    expect(engineer.github).toBe(user)
})