/* Object 

Way to Declare
1. Literal => Multipleton => let info = {}
2. Constructor => Singleton => object.create

*/

const info = {
    name : "Asif",
    "Full Name" : " Asif Nawaz",
    Age : 21,
    gender : "Male",
    Qualification : "Under_Graduate",
    SKill : "Web Development"
}

console.log(info.name); // Print the Name key Value from the Object Info
console.log(info.Age); // Print the Age key Value from the Object Info
console.log(info.gender); // Print the gender key Value from the Object Info
console.log(info.Qualification); // Print the Qualification key Value from the Object Info
console.log(info.SKill); // Print the Skill key Value from the Object Info

console.log(info); // Complete Object
console.log(info["Full Name"]); // onsole a String key value from an Object

// Add  a Symbol value into an onject

const mySym = Symbol("Key");
const user = {
    name : "Asif",
    "Full Name" : "Asif Nawaz",
    mySym : "KeyValue", // Working But not a good Approach
    [mySym] : "Key Value of Symbol" // Good way to add a symbol value into an Object
}

console.log(user.mySym); // Working but not a good way to approach
console.log(user[mySym]); // Best way to approach

// Change in Value

user.name = "Asif Nawaz Jutt" // Change in value of an Object key
console.log(user.name); // Asif Nawaz Jutt

/*

// lock the Object

Object.freeze(user); //Freeze is use to lock the Object values
user.name = "Asif Nawaz";
console.log(user.name); // Not change to Asif Nawaz it's Remain Asif Nawaz Jutt

*/

// Add functions into an Object

user.greeting = function(){
    console.log("Hello JS Developer");
}

console.log(user.greeting); // [Function (anonymous)] => Provides only reference
console.log(user.greeting()); // Hello JS Developer

user.greeting = function(){
    console.log(`Hello Mr, ${this["Full Name"]} , WelCome Back`); //This is use to get value from an Object
}

console.log(user.greeting()); // Hello Mr, Asif Nawaz , WelCome Back

// ************************** Constructor Object **************************

// const tinderUser = new Object{}

const tinderUser = {}
tinderUser.id = "1233se"
tinderUser.name = "Asif Nawaz"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Console Only keys of An Object
console.log(Object.values(tinderUser)); // Only Value of an Object
console.log(Object.entries(tinderUser)); // Change Each key value pair into an Array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check to Property existance or Not


const regularUser = {
    email : "asif@google.com",
    fullName : {
        userFullName:{
            firstName :"Asif",
            lastName : "Nawaz"
        }
    }
}

console.log(regularUser.fullName) // Complete Object of fullName 
console.log(regularUser.fullName.userFullName.firstName); // Move to nested Object

// *************** Add two Objects ***************

const myObj1 = {
    1 : "a",
    2 : "b"
}
const myObj2 = {
    3 : "c",
    4 : "d"
}

// const Obj3 = {myObj1 , myObj2}; //Not Good Practice => { myObj1: { '1': 'a', '2': 'b' }, myObj2: { '3': 'c', '4': 'd' } }
// const Obj3 = Object.assign(myObj1 , myObj2); // Good Practice => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const Obj3 = Object.assign({} , myObj1 , myObj2); // Best Practice => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const Obj3 = {...myObj1 , ...myObj2}; // => But mmost of the usage Recomanded spread operator
console.log(Obj3);


