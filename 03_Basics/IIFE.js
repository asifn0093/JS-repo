// IIFE = Immediately Invoked Function Expressions
// 1.No Global polution 2. Immediately Execuation

// Basic Function

function IIFE() {
    console.log("DataBase Connected");
}
IIFE();

// IIFE Function 

(function IFFE(){ // Named IIFE => It's contains Function Name which is IIFE
    console.log("This IIFE Function");
    
})();

// IIFE in Arrow Function

( () => { // Un-Named IIFE => Bcz it's not contain any funtion name
    console.log("This IIFE Function using Arrow Function");
})();

// IIFE Argument Pass in Arrow Function

((name) => {
    console.log(`WelCome Back ${name} to DataBase`);
})("Asif Nawaz")