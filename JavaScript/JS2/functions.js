/*
* Function Statements and Expressions
* Function Declaration
* Anonymous Function Expression
* Named Function Expression
* Arrow Function Expression
* */

// Function Declaration, Function Statement
function greet(from, to) {
    console.log(from + " says hi to " + to);
}

greet('uttam','abhishek');


const sayHiExpression = function (from, to) {
    console.log(from + " says hi to " + to);
    console.log("I am an anonymous function");
}

sayHiExpression('uttam','abhishek');

//First Class Functions || First Class Citizens
//Functions can be used as methods, arguments, return types