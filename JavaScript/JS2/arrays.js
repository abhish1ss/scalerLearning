const a= [1,2,3,4,5,6,7,8,9,10];
//splice(start index, delete count, item1, item2, item3, ...)

//adding elements
a.splice(1,0,5,5,5);
console.log(a);
// console.log(d);
//deleting elements
a.splice(1,3);
console.log(a);

//replacing elements
a.splice(0,2,13,15);
console.log(a);