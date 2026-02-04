console.log("Part 1: Exercise 1");
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Expected: 50
console.log(calculateArea(7, 3)); // Expected: 21
console.log(calculateArea(4, 4)); // Expected: 16

console.log("Part 1: Exercise 2");
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};
console.log(calculatePerimeter(5, 10)); // Expected: 30
console.log(calculatePerimeter(7, 3)); // Expected: 20
console.log(calculatePerimeter(4, 4)); // Expected: 16