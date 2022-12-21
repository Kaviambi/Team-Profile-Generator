

const Intern = require('../lib/Intern');

describe("interninputs", () => {
    const name = "Neal";
    const id = "34";
    const email = "neal.34@tech.com";
    const school = "UTSA";

    const testIntern = new Intern(name, id, email, school);

    it("returns Intern name", () => {
        expect(testIntern.getName()).toEqual(name);
    });

    it("returns Intern id", () => {
        expect(testIntern.getId()).toEqual(id);
    });

    it("returns Intern email", () => {
        expect(testIntern.getEmail()).toEqual(email);
    });

    it("returns Intern school", () => {
        expect(testIntern.getSchool()).toEqual(school);
    });
})