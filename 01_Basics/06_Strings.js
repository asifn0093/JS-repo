const firstName = "Asif"
const lastName  = "Nawaz"
const fullName = firstName + " " + lastName;
const repoCount = 17;
console.log(fullName + " " + repoCount);

// Modern and Recommanded way to use Console

console.log(`Hello My Name is ${fullName} and Total repository are ${repoCount} on Github`);

// String as an Object in JS

const facebook = new String("Asif Nawaz (Jutt)");
console.log(facebook); // Console the variable Facebook
console.log(facebook[0]) //
console.log(facebook.__proto__); //
console.log(facebook.length); //
console.log(facebook.toUpperCase()); //
console.log(facebook.charAt(7)); //
console.log(facebook.indexOf('w')); // 
const myFirstName = facebook.substring(0 , 4); // Only positive Values
console.log(myFirstName); // 
console.log(facebook.slice(-18 , 15)); // Also contains Negative values
const newString = "       Asif Nawaz        ";
console.log(newString);
console.log(newString.trim());

// Documentation = 

const url = "https://asif-nawaz%20portfolio.netlify.app";
console.log(url.replace('%20' , '-'));
console.log(url.includes('asif')); // True
console.log(url.includes('jutt')); // False

const strintToArray = "asif-nawaz-jutt-portfolio";
console.log(strintToArray.split('-'));

// Also you can read all other string methods from => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods