const AccountId = 12345
let accountName = "John Doe"

var accountPassword = "" // Prefer not to use var bcz of issue in lock scope and functional scope

AccountCity = "London" // This will create a global variable if not declared with var, let, or const

let accountState; //Not defined value

// AccountId = 2; //Const Value is Not Change ever (Not Allowed to Change) 

console.log(AccountId);

accountName = "James Bond"; // Allowed to change the value of a variable declared with let
accountPassword = "mySecurePassword"; // Allowed to change the value of a variable declared with var
AccountCity = "New York"; // Allowed to change the value of a global variable

// Now console all values

console.log(accountName);
console.log(accountPassword);
console.log(AccountCity);
console.log(accountState);

// Also another Method to console or get output of the variable is to use console.table() which will give a table format output of the variables

console.table([AccountId, accountName, accountPassword, AccountCity, accountState]);