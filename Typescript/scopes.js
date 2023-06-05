//Hoisting: All declarations(variables, fn, classes) is placed at the top of the
// scope
// var x; var y



console.log("x", x); // undefined
var x = 10; // global
console.log("x", x); //10

var y; // global
console.log("y", y); //undefined

//console.log("z", z); //Exception

function foo(){
    //var a; var msg

    console.log("in foo");
    var a = 10; // function scope
    if(a < 100){
        let msg = "hello";
        console.log("msg", msg);
    }
    
    
}
foo();

console.log("App over");
