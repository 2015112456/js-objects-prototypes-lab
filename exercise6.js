console.log("Part 4: Exercise 7");
//prototype chain: manager -> employee -> person -> Object.prototype -> null
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];
manager.addTeamMember = function(name) {
    manager.team.push(name);
};

manager.addTeamMember('Roger');
manager.addTeamMember('Jeff');
console.log(`Team members: ${manager.team}`); //returns team from manager
console.log(`Company: ${manager.company}`); //returns company manager -> employee prototype
console.log(`Species: ${manager.species}`); //returns species from manager -> employee -> person prototype
console.log(`${Object.hasOwn(manager, 'position')}`); //calls hasOwn() from manager -> employee -> person -> Object.prototype
console.log(`${manager.dob}`); //returns undefined as dob is not defined in the prototype chain