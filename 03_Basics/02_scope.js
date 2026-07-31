console.log("WelCome to the Scope of Functions");

// Global Scope => Accesable anywhere in the code 
// Local Scope =>  Accesable only inside the block   

if (true) { // {This is the block and scope of values inside it and they work only inside this curly brackets}
    let a = 10
    const b = 20
    var c = 30 
}

// console.log(a); //  a is not defined 
// console.log(b); //  b is not defined
// console.log(c); // 30 => It's accesable out side the Block that's why we can't prefer to use var

// *************   Nested Scope   *************

function One(){
    const userName = "Asif Nawaz"
    function Two(){
        const website = "Github"
        console.log(userName);
    }
    // console.log(website); // website not Defined bcz we want to access it outside the Scope / Function
    // Two(); // Asif Nawaz bcz we access the parent values from the child functions
}
One() // Nothing Print bcz we don't perform any console perform in Two but not access due to scope

if (true) {
    const userName = "Asif"
    if(userName === "Asif"){
        const website = "Github"
        // console.log(userName + " " + website); // Acces Completely => Asif Github
    }
    // console.log(website); // Out of Scope
}

// console.log(userName); // Out of Scope

// ***************   Interesting Fact   ***************

// BASIC FUNCTION => Also use callBack function before the function declaration

function addOne(num){
    return num + 1;
}
console.log(addOne(5)); // 6

// Expression also a function but in a variable => Not working if we callBack function before the declaration

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7));