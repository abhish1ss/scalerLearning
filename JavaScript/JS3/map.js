const arr = [1,2,3,4,5,6,7,8,9,10,11];

const callback = (number) => {
    return number * number;
}
const square = arr.map((number, index,array) => {
    return number * number;
});
console.log(square);

const transaction = [1000,300,500,200,100];
const inrToUsd = transaction.map((amount) => {
    return amount * 0.014;
});

// console.log(inrToUsd);

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const even = arr.filter((number) => {
    return number % 2 === 0;
}).map((number) => {
    return number * number;
});

console.log(even);