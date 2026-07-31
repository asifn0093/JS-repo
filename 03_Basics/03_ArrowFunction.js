console.log("WelCome to the Arrow Function");
// Feature of EcmaScript 6 (ES6)
// This Function =>  Refers Current Context =>
// Arrow Function => 

const user = {
    userName : "Asif Nawaz",
    payout : 9999,
    welComeMessage: function(){
        console.log(`${this.userName} , WelCome to Tech With Asif`);
        console.log(this);
        
    }
}
// user.welComeMessage()
// user.userName = "Adam"
// user.welComeMessage()

console.log(this); // {} => Output of the Console of this only

/*

function tect(){
    const userName = "Asif Nawaz"
    console.log(this);
    console.log(this.userName); // Undefined BCZ of it's working only in Object but not working inside the function
}
tect()

*/

// const tect = function(){
//     let userName = "Asif Nawaz"
//     console.log(this.userName); // Undefinrd
// }
// tect();

// Declaration of Arroe Function

const tect = () => { 
    let userName = "Asif Nawaz"
    console.log(this.userName); // Undefinrd
    console.log(this); // {}
    
}
tect();

// BASIC Arrow Function 

() => {}

// Holding in An Element

const addTwo = (num1 , num2) => {
    console.log(`The sum of ${num1} & ${num2} is = ${num1 + num2}`); // Direct Console
}
addTwo(10 , 5)

// Implesent Return  => Return keyword is compalsary 

const AddTwo = (num1 , num2) => {
    return `The sum of ${num1} & ${num2} is = ${num1 + num2}`; // Return and than assign in a variable
}
const result = AddTwo(10 , 5);
console.log(result);

// Implesent Return 

const Addtwo = (num1 , num2) => `The sum of ${num1} & ${num2} is = ${num1 + num2}`;
console.log(Addtwo(11 , 7));

const AddTo = (num1 , num2) => (`The sum of ${num1} & ${num2} is = ${num1 + num2}`);
console.log(AddTo(7 , 8));

/* Point to be Noted  

In Curly Brackets Return keyword is compelsary
In round Brackets (Paranthesis) return keyword in unneccessary

*/

// Return Object in Arrow Function using paratensis

const developer  = () => ({userName : "Asif Nawaz"});
console.log(developer());

