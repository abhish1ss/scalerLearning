/*
* Function Statements and Expressions
* Function Declaration
* Anonymous Function Expression
* Named Function Expression
* Arrow Function Expression
* */

// Function Declaration, Function Statement
// function greet(from, to) {
//     console.log(from + " says hi to " + to);
// }
//
// greet('uttam','abhishek');
//
//
// const sayHiExpression = function (from, to) {
//     console.log(from + " says hi to " + to);
//     console.log("I am an anonymous function");
// }
//
// sayHiExpression('uttam','abhishek');

//First Class Functions || First Class Citizens
//Functions can be used as methods, arguments, return types

// console.log(a);
// var a = 10;

var a= 10;
var b=20;

function add(a,b) {
    return a+b;
}

var result = add(a,b);
var r1 = add(result,20);
console.log(result);
console.log(r1);

//JavaScript Engine works in 2 phases
//Memory Creation Phase/Memory Allocation Phase
//Code Execution Phase