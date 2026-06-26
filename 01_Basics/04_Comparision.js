// Comparison Operations in JS

console.log(2 > 1); //  true because 2 is greater than 1
console.log(2 < 1); // false because 2 is not less than 1
console.log(2 >= 1); // true because 2 is greater than or equal to 1
console.log(2 <= 1); // false because 2 is not less than or equal to 1
console.log(2 == 1); // false because 2 is not equal to 1
console.log(2 != 1); // true because 2 is not equal to 1
console.log(2 == "2"); // true because == operator does type coercion and converts the string "2" to number 2 before comparison
console.log(2 === "2"); // false // because === operator does not do type coercion and checks for both value and type

// ************** Avoid To code Conversion ***************

console.log(null > 0); //false 
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
