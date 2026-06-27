/* 

// Prmitive Data type (Number)
const score = 300;
console.log(score);
console.log(typeof score);

// Non-Premitive (Reference) Data Type (Object)
const balance = new Number(28720);
console.log(balance);
console.log(typeof balance);

// ToString
console.log(balance.toString()); // 28720
console.log(balance.toString().length); // 5

// Tofixed ==> Fixed the number of Zero after decimal point
console.log(balance.toFixed(2)); // 28720.00

// Precision Value ==> Fixed the total lenght of numbers
const otherNumber = 28720.231;
console.log(otherNumber.toPrecision(6)); // 28720.2

// ToLocaleString ==> Make set of 3 from end to start
const multipleZero = 1000000000000;
console.log(multipleZero.toLocaleString('en-Pk')); // PK and US Nums calculation almost but diiferent from India becuase it's use set of 2

// Alos Max-value , Min-safe-value , Min-safe-value , Min-value , Infinite , Integer

*/

// ***************   MATHS   ***************

console.log(Math); // Object in it's Own
console.log(Math.abs(-4)); // Change the sign of value
console.log(Math.round(4.9)); // Round of value
console.log(Math.ceil(4.2)); // Ceil => Use to ue always upper value no matter it's .3 or .7
console.log(Math.floor(4.9)); // Floor => Use low value instead no matters it's .9 or .3
console.log(Math.min(12,34,2,45)); // Minimum Number
console.log(Math.max(23,44,2,5,11)); // Maximum Number


console.log(Math.random()); // Getting Ramdom Number in decimal point between 0 to 1
console.log(Math.round(Math.random()*10) + 1); // Getting Random number between 1 to 10

const min = 0;
const max = 9;
console.log(Math.floor(Math.random() * ( max - min + 1)) + min );

