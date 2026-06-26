"use strict"; //Treat all JS code as newer version

// alert("Hello World!"); //We are using Node, Not Browser 

console.log(3 + 3); // Code readabilty Should be High
console.log("Asif Nawaz");

// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// Documentation: https://tc39.es/ecma262/#sec-ecmascript-language-types

let name = "Asif"; // String DataType (Literal)
let age = 22; // Number DataType (Literal)
let isApproved = true; // Boolean DataType (Literal)

// Number (Range)=> 2 to power of 53 - 1 (9007199254740991) => 2^53 - 1
// BigInt (Range)=> 2 to power of 1024 - 1 (17976931348623159077293051907890247336179769789423065727343008115
// String => ""  Use single or double quotes for string => Prefer to use Double Quotes
// Boolean => true or false
// Null => Standalone value // int Temp = Null; // null // Typeof null => object (Bug in JS)
// Undefined => undefined (empty value) // int Temp; // undefined // Typeof undefined => undefined
// Symbol => Unique Identifier (ES6) // const sym = Symbol(); // Symbol("id") // Symbol("id") !== Symbol("id")
// Objects => Key-Value Pair (ES6) // const person = { name: "Asif", age: 22 }; // person.name or person["name"]