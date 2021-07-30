
const Manager = require('../lib/Manager.js');

test("manager's properties", () => {
    const manager = new Manager("Kyle", 54122, "Kyle@any.com", "102")
    expect(manager.name).toBe("Kyle")
    expect(manager.id).toBe(54122)
    expect(manager.email).toBe("Kyle@any.com")
    expect(manager.officeNumber).toBe("102")

});