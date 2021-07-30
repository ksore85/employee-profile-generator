
const Engineer = require('../lib/Engineer.js');

test("engineer's properties", () => {
    const engineer = new Engineer("Kyle", 54122, "Kyle@any.com", "ksore85")
    expect(engineer.name).toBe("Kyle")
    expect(engineer.id).toBe(54122)
    expect(engineer.email).toBe("Kyle@any.com")
    expect(engineer.github).toBe("ksore85")

});