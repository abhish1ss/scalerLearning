//

function printfirstname(firstname) {
    console.log("My first name is " + firstname);
}

function printlastname(lastname) {
    console.log("My last name is " + lastname);
}


printfirstname("Ankit");
printlastname("Tiwari");

//HOF - Higher Order Function
// Any function that takes another function as an argument or returns another function as a result is called a higher order function
function greet(fullname, print) {
    return print(fullname);
}

function print(fullname){
    console.log("Hi " + fullname);
}

greet("Ankit Tiwari", print);

const myRadiusArr = [2,3, 4, 5, 6, 7, 8, 9, 10];

function printAreaCircumferenceAndDiameter(radius) {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    const diameter = 2 * radius;
    console.log("Radius: " + radius + " Area: " + area + " Circumference: " + circumference + " Diameter: " + diameter);
}

for i in myRadiusArr {
    printAreaCircumferenceAndDiameter(i);
}

