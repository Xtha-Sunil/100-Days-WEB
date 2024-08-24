// hoisting refers to process whereby the intrepeter appears to move the declarations to top of the code before execution.

// variables thus can be refrenced before initialization in javascript

greet(); // will call greet even it is not declared yet;
function greet() {
  console.log("Hello Sunil");
}

// "var" is hoisted
console.log(asd);
var asd = 12022; // declaration is hoisted to top but not initialization

// "let/const" is not hoisted
//console.log(fgh);
let fgh = 'sunil';

// function expression and class expression are not hoisted
greet2(); // greet2 is not function
var greet2 = function() {
  console.log("hello Sunil");
};
