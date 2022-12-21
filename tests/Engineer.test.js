


const Engineer = require('../lib/Engineer');

describe("engineerinputs", () => {
    const name = "James";
    const id = "23";
    const email = "james.23@tech.com";
    const github = "james23";
    const role = "Engineer";

    const testEngineer = new Engineer(name, id, email, github);

    it("returns engineer name", () =>{
        expect(testEngineer.getName()).toEqual(name);
    });

    it("returns engineer id", () =>{
        expect(testEngineer.getId()).toEqual(id);
    });

    it("returns engineer email", () =>{
        expect(testEngineer.getEmail()).toEqual(email);
    });

    it("returns engineer github", () =>{
        expect(testEngineer.getGithub()).toEqual(github);
    });

    it ("return engineer role", () => {
        expect(testEngineer.getRole()).toEqual(role);
    });
});