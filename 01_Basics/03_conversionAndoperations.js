// /*  

// ** Important Points to Note in JS **

// 1. If score is not a number like ("hello123") then it will return NaN
// 2. If score value is undefined then it will return NaN
// 3. If score value is null then it will return 0
// 4. If score value is true then it will return 1 and If score value is false then it will return 0

// */

// let score = "33";
// console.log(typeof score);
// console.log(typeof (score));

// // Conversion into Number from a String 

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// // Conversion into String from a Number

// let score1 = 44;
// console.log(typeof score1);
// console.log(typeof (score1));

// // How to Convert Number into String

// let valueInString = String(score1);
// console.log(typeof valueInString);
// console.log(valueInString);

// // Conversion into Boolean from a Number

// let isLoggedIn = 1;
// let valueInBoolean = Boolean(isLoggedIn);

// console.log(typeof isLoggedIn);
// console.log(typeof valueInBoolean);


//  ****************** Operations ******************

let value = 3;
let negValue = -value;
console.log(negValue);

// Arithmatic Operations 

console.log(2 + 2); // Addition Arithmatic Operation in JS
console.log(2 - 2); // Subtraction Arithmatic Operation in JS
console.log(2 * 2); // Multiplication Arithmatic Operation in JS
console.log(2 / 2); // Division Arithmatic Operation in JS
console.log(2 ** 3); // Exponentiation Arithmatic Operation in JS
console.log(2 % 2); // Remainder (Modulus) Arithmatic Operation in JS

// Add two strings in JS

let str1 = "Hello";
let str2 = "Asif";
let str3 = str1 + " " + str2; // Concatenation of two strings in JS
console.log(str3); // Concatenation of two strings in JS
console.log(str1 + " " + str2); // Also other way to Add two strings in JS


// Problem creates when we add a string and a number

let str4 = "Hello";
let num1 = 5;
console.log(str4 + num1); // It will return Hello5 because it will convert number into string and then concatenate it with the string

let num2 = 5;
let num3 = "10";
console.log(num2 + num3); // It will return 510 because it will convert number into string and then concatenate it with the string

console.log(1 + 1 + "1"); // It will return 21 because it will first add 1 + 1 = 2 and then concatenate it with the string "1" to return 21
console.log("1" + 1 + 1); // It will return 111 because it will first concatenate "1" + 1 = "11" and then concatenate it with the string "1" to return 111

// Abstract Operations in JS
console.log(2 + "2");

let num4 , num5 , num6;
num4 = num5 = num6 = 2 + 2; // It will return 4 because it will first add 2 + 2 = 4 and then assign it to num4, num5 and num6
console.log(num4, num5, num6); // It will return 4 4 4 because it will first add 2 + 2 = 4 and then assign it to num4, num5 and num6
console.log(num4 + num5 + num6); // It will return 12 because it will first add 4 + 4 = 8 and then add 8 + 4 = 12