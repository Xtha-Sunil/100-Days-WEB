async function f1() {
  let p1 = new Promise((resolve, reject)=> {
    setTimeout(function() {
      resolve("p1 resolved");
    }, 1000);
  });
  let p2 = new Promise((resolve, reject)=> {
    setTimeout(function() {
      resolve("p2 resolved");
    }, 1500);
  });
  console.log('Waiting for p1');
  let a = await p1;
  console.log('P1 fulfilled');

  console.log('Waiting for p2');
  let b = await p2;
  console.log('P2 fulfilled');
}


async function main1() {
  console.log("I am code before f1");
  await f1();
  console.log("I am code after f1");
}
main1();

// async function is used to make function asynchronous and enable await method.
// Await method stops the execution of code till the promise is fulfilled.
