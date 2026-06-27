/* 
 
        ***********   Data Types  *************
Primitive Data Types = Number, String, Boolean, Null, Undefined, Symbol, BigInt
Non-Primitive (Reference) Data Types = Object, Array, Function

*/

// ************* Primitive Data Types ***************

const num = 42; // Number
const str = "Hello, World!"; // String
const bool = true; // Boolean
const n = null; // Null
let u; // Undefined
const sym = Symbol("unique"); // Symbol
const bigInt = 123456789012345678901234567890n; // BigInt

// ************* Non-Primitive (Reference) Data Types ***************

const myObj = { name: "Asif", age: 21 }; // Object
const arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    return "Asif Nawaz";
}
console.log(greet()); // Calling the function

console.log(typeof myObj); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"

// Documentation: https://262.ecma-international.org/5.1/#sec-11.4.3