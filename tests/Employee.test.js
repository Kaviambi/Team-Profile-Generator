const Employee = require('../lib/Employee');

describe("inputs", () => {
    const name = "Kenny";
    const id = "12";
    const email = "kenny.12@tech.com";
    const role = "Employee";

const testEmployee = new Employee(name, id, email);

it ("return employee name", () => {
    expect(testEmployee.getName()).toEqual(name);
});

it ("return employee id", () => {
    expect(testEmployee.getId()).toEqual(id);
});

it ("return employee email", () => {
    expect(testEmployee.getEmail()).toEqual(email);
});

it ("return employee role", () => {
    expect(testEmployee.getRole()).toEqual(role);
});

});