/* 

Memories are a way to store data in a program. 
In JavaScript, there are different types of memories, such as stack and heap.

Stack memory is used for static memory allocation, where the size of the data is known at compile time. It is fast and efficient, but limited in size .
All prmitive Data Types use Stack Memory such as Number,String,BigInt,Boolean,Null,Undefined,Symbol
Heap memory is used for dynamic memory allocation, where the size of the data can change at runtime. It is slower than stack memory, but allows for more flexibility in storing data.   
All Non Prmitive (reference) Data Types use Heap Memory such as Object, Array & Function

Stack = Primitive
Heap = Non-Primtive

*/

// Stack Memory use Copy of Original value

let myFacebook = "Asif Nawaz Jutt";
let anOtherPage = myFacebook;
anOtherPage = "Web For Everyone Dev"

console.log(myFacebook);
console.log(anOtherPage);

// Heap Memory use References and Direct Original Values

let myInfo = {
    name : "Asif Nawaz",
    age : 21,
    userId : "student@gcuf"
}
let MyInfoUpdated = myInfo;
myInfo.userId = "WebDeveloper"

console.log(myInfo.userId);
console.log(MyInfoUpdated.userId);
