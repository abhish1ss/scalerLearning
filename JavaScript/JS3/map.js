const arr = [1,2,3,4,5,6,7,8,9,10,11];

const callback = (number) => {
    return number * number;
}
const square = arr.map(callback);
console.log(square);