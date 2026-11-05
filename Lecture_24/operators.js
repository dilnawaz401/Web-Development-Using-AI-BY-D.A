// operator
// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15


// comparison operators
console.log("Equal to:", a == b); // false
console.log("Not equal to:", a != b); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false


// logical operators
console.log("AND:", a > 5 && b < 10); // true
console.log("OR:", a > 15 || b < 10); // true
console.log("NOT:", !(a == b)); // true

// assignment operators
let c = 20;
c += 5; // c = c + 5
console.log("After addition assignment:", c); // 25
c -= 3; // c = c - 3
console.log("After subtraction assignment:", c); // 22

// bitwise operators

let x = 5; // 0101 in binary
let y = 3; // 0011 in binary
console.log("Bitwise AND:", x & y); // 1 (0001 in binary)
console.log("Bitwise OR:", x | y); // 7 (0111 in binary)
console.log("Bitwise XOR:", x ^ y); // 6 (0110 in binary)
console.log("Bitwise NOT:", ~x); // -6 (1010 in binary)
