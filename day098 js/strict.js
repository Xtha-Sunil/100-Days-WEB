// This function takes two numbers as arguments and returns their sum.
'use strict'; // Enable strict mode for this function
function addNumbers(num1, num2) {
  // Variables must be declared before use in strict mode
  let sum = 0;
  
  // Duplicate parameter names are not allowed in strict mode
  // The following line would cause a syntax error:
  // function addNumbers(num1, num1) { }
  
  // Adding two numbers and returning the result
  sum = num1 + num2;
  return sum;
}

// Calling the function with two numbers and printing the result
const result = addNumbers(3, 5);
console.log(result); // Output: 8
