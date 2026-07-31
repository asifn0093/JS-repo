function myName(){
    console.log("Asif Nawaz");    
} 
// myInfo // Reference
// () //Execuation
myName() // Function Execuation

// Add two number using Function

// 1.Basic Way to Pass Parameters

function Add(num1 , num2){ // Parameter Passing
    console.log(num1 + num2);
}
Add(12,4) // Arguments Passing

// Using Return Method Also one more thing The value or anything after return keyword in a function is not accessable


function Sum(num1 , num2){ // Parameter Passing
    // return num1 + num2;
    let result = num1 + num2;
    return result;
}
let result = Sum(12,3) // Arguments Passing
console.log(result);

// 2.Other Way to Pass Parameters

function userLogin(userName){
    if(userName === undefined){
        console.log("Please Enter a userName");
        return 
    }
    return `WelCome Back ${userName}`;
}
console.log(userLogin("Asif Nawaz")); // Direct Console => WelCome Back Asif Nawaz
let succesMessage = userLogin("Asif Nawaz") // save in a variable and than console 
console.log(succesMessage); // WelCome Back Asif Nawaz

// If a user pass avalue than it's worthed but if a user just call the function without passing the arguament than it's return undefined

function userLogin(userName = "Guest"){ // Add a default userName
    if(userName === undefined){ // Add Condition if there is No userName than
        console.log("Please Enter a userName");
        return 
    }
    return `WelCome Back ${userName}`;
}
console.log(userLogin()); // WelCome Back undefined

// Function for An E-Commerce website for add to cart section where we don't know how many elements we have to count

function calculateCartPrice(...num1){ // Rest Operator
    return num1;
}
console.log(calculateCartPrice(2,321,440)); 

// Objects in Functions

const user = {
    userName : "Asif Nawaz",
    rollNum : 14
}
function handleObject(anyobject){ 
    console.log(`userName is ${anyobject.userName} & roll Number is ${anyobject.rollNum}`);   
}
handleObject(user) // Seprate make an Object and than pass it as an Arguament
handleObject({ // Direct Pass Complete Object as a Argument
    userName : "Asif Jutt",
    rollNum : 331
})


// Arrays in Function

let numbers = [12,23,435,67,44,98,90]
function handleArray(anyarray) { // Create an Array and than pass it as arguament into the function
    return anyarray[0];
}
console.log(handleArray(numbers)); // Pass Created Array as an Arguement
console.log(handleArray([21,213,225])); // Create a new array and than pass it as an Arguament