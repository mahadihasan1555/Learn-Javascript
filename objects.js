// object Literals

const person = {
    firstName: "Mahadi",
    lastName: "Hasan",
    age: 20,
    hobbies:["music", "movies", "cycling"],
    address:{
        street: "50/2 shabag",
        city: "Dhaka",
        country:"Bangladesh"
    }
}

person.email = "mahadihasan1@gmail.com";

console.log(person.address);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(person);