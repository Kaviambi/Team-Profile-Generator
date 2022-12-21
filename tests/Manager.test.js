
const Manager = require('../lib/Manager');
describe ("managerinputs", () => {
    const name = "CJ";
    const id = "45";
    const email = "cj.45@tech.com";
    const number = "000-000-0000";

    const testManager = new Manager(name, id, email, number);

    it("returns Manager name", () => {
        expect(testManager.getName()).toEqual(name);
    });

    it("returns Manager id", () => {
        expect(testManager.getId()).toEqual(id);
    });

    it("returns Manager email", () => {
        expect(testManager.getEmail()).toEqual(email);
    });

    it("returns Manager number", () => {
        expect(testManager.getNumber()).toEqual(number);
    });
})