//Functional Programming

// ... can be used as rest operator or spread operator
// Spread operator is used to spread out the elements of an array
// Rest operator is used to merge a list of function arguments into an array
// const obj = {
//     firstname:'ankit',
//     lastname: 'tiwari'
// }

// for(let key in obj) {
//     console.log(key, obj[key])
// }

//Spread operator
// const arr= [1,2,3,4,5,6,7,8,9,10,11];
// const arr1 = [12,13,14,15,16,17,18,19,20,21,22];
//
// const arr2 = [...arr, ...arr1];
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

//Rest operator
function myBio(firstname, lastname, ...restBio) {
    console.log(firstname, lastname);
    for (let i = 0; i < restBio.length; i++) {
        console.log(restBio[i]);
    }
}

// myBio('ankit', 'tiwari', 'age: 25', 'city: bangalore', 'country: india');

// destructring -> breaking down into smaller parts
// const arr = ['ankit', 'tiwari', 25, 'bangalore', 'india'];
// const [firstName, lastName, ...rest] = arr;

let a=10;
let b=20;

const arr = [];

arr.push(a);
arr.push(b);
console.log("a="+a);
console.log("b="+b);
[b,a] = [a,b];
// b=arr[1];
// a=arr[0];

console.log("a="+a);
console.log("b="+b);


