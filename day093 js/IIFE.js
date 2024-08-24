// IIFE = Immediately Invoked Functuon Expression

//Using this we can use async / await without making additional function beacuse to use async/await we should make async function first
let a = ()=> {
  return new Promise((res, rej)=> {
    setTimeout(function() {
      res(456);
    }, 2000);
  });
};
/* BEFORE IIFE
let e = async ()=> {
  let b = await a();
  console.log("b :" +b);
  let c = await a();
  console.log("c :" +c);
  let d = await a();
  console.log("d :" +d);
};
e();
*/
//AFTER IIFE
(async ()=> {
  let b = await a();
  console.log("b :" +b);
  let c = await a();
  console.log("c :" +c);
  let d = await a();
  console.log("d :" +d);
})();

// here we dont need to make new function and call them separately
// after executing IIFE memory will be released