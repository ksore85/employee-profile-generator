
const Employee = require('../lib/Employee.js');

test("employee's properties", () => {
    const employee = new Employee("Kyle", 54122, "Kyle@any.com")
    expect(employee.name).toBe("Kyle")
    expect(employee.id).toBe(54122)
    expect(employee.email).toBe("Kyle@any.com")

});