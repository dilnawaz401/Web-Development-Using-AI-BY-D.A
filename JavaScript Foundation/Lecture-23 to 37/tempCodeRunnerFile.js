// example 1

let number1 = 10;
let number2 = 2;
let result = number1 / number2;
console.log("result:", result);

try {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    let number3 = 0;
    let result2 = number1 / number3;
    console.log("result2:", result2);
} catch (error) {
    console.error("An error occurred:", error.message);