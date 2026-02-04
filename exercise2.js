console.log("Part 2: Exercise 3");
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);

const evens = numbers.filter(num => num % 2 === 0);

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Squared: " + squared);
console.log("Even numbers: " + evens);
console.log("Sum: " + sum);