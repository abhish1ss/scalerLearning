const CaptainAmerica = {
    name: "Steve Rogers",
    age: 165,
    allies: ["Bucky", "Tony", "Natasha", "Dr Banner"],
    address:{
        city: {
            name: "New York",
            zipcode: 12345
        },
        country: "united states"
    },
    isAvengerLeader: true,
    SayHi: function(){
        console.log("Hi, I am Captain America");
    }
}

//CRUD Operations
//accessing object properties
// console.log(CaptainAmerica.name);
// console.log(CaptainAmerica["name"]);
// console.log(CaptainAmerica.address.city.name);
CaptainAmerica.SayHi;
//updating the items of object
CaptainAmerica.isAvengerLeader = false;

//adding new properties to object
CaptainAmerica.movies = ["First Avenger", "Winter Soldier", "Civil War"];

console.log(CaptainAmerica);

//deleting properties from object
delete CaptainAmerica.movies;
console.log(CaptainAmerica);