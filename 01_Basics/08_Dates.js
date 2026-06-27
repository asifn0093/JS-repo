// Date
let myDate = new Date()
console.log(typeof myDate);

console.log(myDate.toString()); // Sat Jun 27 2026 07:40:56 GMT+0500 (Pakistan Standard Time) 
console.log(myDate.toDateString()); // Sat Jun 27 2026
console.log(myDate.toISOString()); // 2026-06-27T02:40:56.894Z
console.log(myDate.toLocaleDateString()); // 6/27/2026
console.log(myDate.toLocaleString()); // 6/27/2026, 7:40:56 AM
console.log(myDate.toTimeString()); // 07:40:56 GMT+0500 (Pakistan Standard Time)

// Own created Date
// Make sure in JavaScript Months will be start from the 0 = Jan , 1 = Feb , 2 = March ........ So,

// Only Date
let anniversaryDate = new Date(2026 , 4, 8);
console.log(anniversaryDate.toDateString()); // Fri May 08 2026

// Date & TIme 
let anniversaryTime = new Date(2026,4,8,20,30);
console.log(anniversaryTime.toLocaleString()); // 5/8/2026, 8:30:00 PM

// Day , Month & Year In this way month will be start from 1 not from 0 So, it's like 1 = Jan , 2 = Feb , 3 = MArch..etc
let myAniversary = new Date("2026-05-08");
console.log(myAniversary.toLocaleString()); // 5/8/2026, 12:00:00 AM

// Comparision of Diiferent Dates
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1782530889057
console.log(myAniversary.getDate()); // 8
console.log(Math.floor(Date.now()/1000)); // 1782530889 // Date in Seconds not in milli_seconds

// Other way to represent the Date

let newDate = new Date()
console.log(newDate); // 2026-06-27T03:32:57.426Z
console.log(newDate.getDay()); // 6 // It's work like Monday = 1, Tuesday = 2, .... Saturday = 6 & Sunday = 7
console.log(newDate.getMonth()); // 5 // Month Start from 0 like Jan = 0 , Feb = 1 , March = 2 ,.... Nov = 10 & Dec = 11
console.log(newDate.getMonth() + 1); // 6 // Because of Adding 1 the Month will be start from 1 not 0
console.log(newDate.getFullYear()); // 2026 // Current Year
 
// Most Powerfull and more properties caring Model of Date is .tolocaledate

let Newdate = new Date();
let formatted = Newdate.toLocaleString('default', {
    dateStyle: "full"
});
console.log(formatted);

/* Mosstly Use in Application like Hotels and Bookings */