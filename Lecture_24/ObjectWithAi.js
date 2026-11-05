// example 1
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("person", person);
// example 2
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log("car", car);
// example 3

const book = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];
console.log("book", book);

// array of 5 car objects
const cars = [
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2022 },
    { make: "Hyundai", model: "i20", year: 2019 },
    { make: "BMW", model: "X5", year: 2023 }
];

// print make and model of the first car
console.log("First car make:", cars[0].make);
console.log("First car model:", cars[0].model);
