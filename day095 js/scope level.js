/* Scopes in JS
1. Block level
2. Function level
3. Global level
*/


let p = 9;
{
  let a = 8;
  p = 10; // p is refrencing to global var so it will change original value but if we add "let" it will change within this block only
  console.log(p); // 10
}

//console.log(a); // error because 'let' has block level scope
console.log(p); // 10