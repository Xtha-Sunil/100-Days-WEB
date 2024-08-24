// This program defines an object representing a person and prints their name and age.
'use strict'; // Enable strict mode for the entire program

// Define a person object with name and age properties
const person = {
  name: 'John',
  age: 30
};

// Attempting to modify a non-writable property in strict mode throws an error
// The following line would cause a TypeError:
// person.age = 35;

// Define a function that takes a person object and prints their name and age
function printPersonInfo(person) {
  // Variables must be declared before use in strict mode
  let name = person.name;
  let age = person.age;
  
  // Accessing undeclared variables in strict mode throws a ReferenceError
  // The following line would cause a ReferenceError:
  // occupation = 'Developer';
  
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

// Call the function to print the person's information to the console
printPersonInfo(person);
