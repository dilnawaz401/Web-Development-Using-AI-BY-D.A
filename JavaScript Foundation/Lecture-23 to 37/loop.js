// example 1 
for (let i = 0; i < 5; i++) {
    console.log(i);
};


console.log ("_____________________");



// example 2
 const numbers =  [1,2,3,4,5,6,7,8,9,10];
 for ( let i =0 ; i <numbers.length; i++){
    console.log ("numbers:",numbers[i]);
};


console.log ("_____________________");



// using  ai  to generate a loop that print the number from  1to 10 

console.log("_____________________");

// example 3: print fruit values using loop only
const fruitList = ["apple", "banana", "orange", "mango", "grape"];
for (let i = 0; i < fruitList.length; i++) {
    console.log("fruit value:", fruitList[i]);
}

console.log("_____________________");

// example 4: print values of car objects using loop only
const cars = [
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2022 },
    { make: "BMW", model: "X5", year: 2023 },
    { make: "Hyundai", model: "i20", year: 2019 }
];

for (let i = 0; i < cars.length; i++) {
    for (const key in cars[i]) {
        console.log(key + ":", cars[i][key]);
    }
    console.log("---");
};




// use while loop 
console.log("_____________________");

 // example 5: 


let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
};

// example 6: print even numbers from 0 to 10 using while loop only



let evenNumber = 0;
while (evenNumber <= 10) {
    console.log("Even number:", evenNumber);
    evenNumber += 2;
};


