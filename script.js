//1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 

//2. On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

//So What Will Be The 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let firstName = "John", lastName = "Doe", age = 35 ; // write variable name and values both 

//3.Use the correct assignment operator that will result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
// what will be the value of x ? 
x = 50; // x *= y;
 
//4. Use comments to describe the correct data type of the following variables:

let length = 16; // data type: number 

let lastName = "Johnson"; // data type: string

const x = {
  firstName: "John",  
  lastName: "Doe"
};// data type: object

//5.Execute the function named myFunction.
 
function myFunction() {
  alert("Hello World!");
}
myFunction(); 
// call the function and see the output 

//6 Create the object
let person = {
  name: "John",
  age: 50
};
// Access the object's properties and alert the message
alert(person.name + " is " + person.age);

//7."Go to the index.html file"


//8. (1) Alert the number of items in an array


const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // Alerts: 3

//8.(2)Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";  // Change the first item to "Ford"
console.log(Brand);  // Output: ["Ford", "Jeep", "Mercedes"]

//9.(1)  create a random number.

let randomInRange = Math.random() * 100;
console.log(randomInRange);  // Example output: 53.721 (varies every time)

//9.(2) return the largest number of 10 and 20.
let largestNumber = Math.max(10, 20);
console.log(largestNumber);  // Output: 20

//9.(3) get the square root of 9.
let squareRoot = Math.sqrt(9);
console.log(squareRoot);  // Output: 3

// operator related problems! 
//10.(1) 
let x = 10;
let y = 5;

alert(x > y);  // This will alert true, because 10 is greater than 5


//10.(2)
let age = 16;

alert(age < 18 ? "Too young" : "Old enough");










