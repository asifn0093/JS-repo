/* JavaScript Execuate Code
1. Global Execuation Context 
2. Function/Functional Execuation Context
3. Eval (In Mongos if you skip it no matter fro JS)

Phases to Execuate in JS File 

1. Memory Creation Phase / Creation Phase => Only allocate the location in Memory
2. Execuation Phase => Perform Operation on Code

*/

let val1 = 10
let val2 = 5
function addNums(num1 , num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNums(val1 , val2);
console.log(result1);
let resul2 = addNums(23 , 5)
console.log(resul2);

/*

********************* Steps In Execuation ********************

1. Global Execuation (this)
2. Memory Phase (collet all variables and save them)
|
|----- >  val1 = undefined
|
|----- >  val2 = undefined
|
|----- >  addNums = function defination
|
|----- >  result1 = undefined
|
|----- >  result2 = undefined

3. Execuation Phase
|
|----- >  val1 = 10
|
|----- >  val2 = 5
        |
        |----- >  addNims ==> New Executional Context 
            new variable envoirnment + Execuation Thread
             Memory Phase
                |
                |----- >  val1 = undefined
                |
                |----- >  val2 = undefined
                |
                |----- >  total = undefined 
             Execuation Context Phase
                |
                |----- >  num1 = 10
                |
                |----- >  num2 = 5
                |
                |----- >  total = 15 (Return in Global Execuation)
|
|----- >  result1 = 15

//  ************************* For Result2  ********************************

1. Global Execuation (this)
2. Memory Phase (collet all variables and save them)
|
|----- >  val1 = undefined
|
|----- >  val2 = undefined
|
|----- >  addNums = function defination
|
|----- >  result1 = undefined
|
|----- >  result2 = undefined

3. Execuation Phase
|
|----- >  val1 = 23
|
|----- >  val2 = 5
        |
        |----- >  addNims ==> New Executional Context 
            new variable envoirnment + Execuation Thread
             Memory Phase
                |
                |----- >  val1 = undefined
                |
                |----- >  val2 = undefined
                |
                |----- >  total = undefined 
             Execuation Context Phase
                |
                |----- >  num1 = 23
                |
                |----- >  num2 = 5
                |
                |----- >  total = 28 (Return in Global Execuation)
|
|----- >  result2 = 28

*/

/*
 ******************* Call Stack ************************

 LIFO  = > Last In First Out

|                   |
|                   |
|   Three ()        |    
| Two()             |
| One() (Come)      |
| Global Execuation |
|___________________|

*/

function one(){
    console.log("One");
};
function two(){
    console.log("Two");
};
function three(){
    console.log("Three");
};

one()
two()
three()