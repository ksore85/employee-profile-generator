
const Intern = require('../lib/Intern.js');

test("intern's properties", () => {
    const intern = new Intern("Kyle", 54122, "Kyle@any.com", "Wisconsin")
    expect(intern.name).toBe("Kyle")
    expect(intern.id).toBe(54122)
    expect(intern.email).toBe("Kyle@any.com")
    expect(intern.school).toBe("Wisconsin")

});