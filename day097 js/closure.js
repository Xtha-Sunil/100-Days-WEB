/*
A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.
*/
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFun = makeFunc();
myFun(); //Mozilla



//example 2
function makeAdder(x) {
  return function (y) {
    return x + y; // x has lexical scope
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12