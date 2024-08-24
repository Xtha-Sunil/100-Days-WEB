const e = 10; //global scope

function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
//sum function should be chained upto 4 param
console.log(sum(1)(2)(3)); // function(d)
console.log(sum(1)(2)(3)(4)); //20
console.log(sum(1)(2)(3)(4)(5)); // not a function