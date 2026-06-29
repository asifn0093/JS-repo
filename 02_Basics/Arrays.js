/* Single variable that contains multiple values.

--- >  Non-Primitive Data Type
--- >  Type Object

1. ResizeAble
2. Mix of Different Data Types
3. Access by using Index number ** Index starts from the 0 means your first value is at 0 index than second value on 1 and so on
4. Provide Shallo Copy of Array Same reference (Change in Original Value)
5. Provide Deep Copy of Array not same reference (Not change in Original Value)



const Arr = [12,2 ,3,4,9];
const Heros = ["Muhammad (s.a.w)" , "Ali (r.a)"]
const myArr = new Array(19,34,22,4) // Not includes Square brackets

console.log(Arr); // Complete Array
console.log(Heros[0]); // Specific Element
console.log(myArr); // Complete Array but usig new Element
console.log(typeof Arr); // Object

*/

// Array Methods

let Arr4Methods = [12,3,4,5,78,44];
Arr4Methods.push(11) // Add 11/value to the end of the Array
console.log(Arr4Methods);

Arr4Methods.pop(); // Remove end value from the Array
console.log(Arr4Methods);

Arr4Methods.shift(); // Remove ELement from the Start of Array
console.log(Arr4Methods);

Arr4Methods.unshift(9); // Add Element to the Start of Array
console.log(Arr4Methods);

console.log(Arr4Methods.includes(78)); // Ture => Return Boolean values only 78 available in Array
console.log(Arr4Methods.includes(9)); // False => Return Boolean values only 9 not available in Array

console.log(Arr4Methods.indexOf(78)); // 4 => Retun the index of Element
console.log(Arr4Methods.indexOf(9)); // -1 Because 9 is not available in Array

const joinArr = Arr4Methods.join(); // Convert the Array Elements into string
console.log(typeof Arr4Methods); // Array , Object
console.log(typeof joinArr); // String

/* 
             *************** Slice & Splice  ***************

 Both Use to get specific portion of the Array

Slice => Range not Include but if you console your original array than you found you same as first
Splice => Range Include if you console your original array than you found you see that the splice portion is exclude or not include now in your Array

*/

// Example of Both Slice & Splice

// Orginal Array

const Arr4SS = [12,34,2,4,65,9,11];
console.log("Original" , Arr4SS);

// Slice Method Array

console.log(Arr4SS.slice(1,4));
console.log("Slice" , Arr4SS);

// Splice Method Array

console.log(Arr4SS.splice(1,4));
console.log("Splice" , Arr4SS);