//function statement
function sum(a, b) {
    return a + b;
}
console.log("sum:", sum(2, 3));
//function expression
var add = function (a, b) {
    return a + b;
};
console.log("add:", add(2, 3));
//arrow function
add = (a, b) => {
    return a + b;
};
console.log("add:", add(20, 30));
add = (a, b) => a + b;
console.log("add:", add(20, 30));
