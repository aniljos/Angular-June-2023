
//function statement
function sum(a: number, b: number){
    return a + b;
}
console.log("sum:", sum(2,3));

//function expression
var add = function(a: number, b: number){
    return a + b;
}

console.log("add:", add(2,3));

//arrow function
add = (a: number, b: number)=> {
    return a + b;
}


console.log("add:", add(20,30));

add = (a: number, b: number)=>  a + b


console.log("add:", add(20,30));