

// example 1

let number1 = 10;
let number2 = 0;
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
};













// using Ai
// Exception handling example using try...catch with user input
try {
  const inputValue = prompt("Enter a number:");
  const number = Number(inputValue);

  if (inputValue === null || inputValue.trim() === "" || Number.isNaN(number)) {
    throw new Error("invalid number entered");
  }

  console.log("you enter a valid number");
} catch (error) {
  console.error(Error(error.message));
}