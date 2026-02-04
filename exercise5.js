console.log("Part 4: Exercise 6");
const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

const car = Object.create(vehicle);
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2024;