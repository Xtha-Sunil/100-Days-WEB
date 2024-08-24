try {
  console.log(abc)
} catch(err) {
  console.log(err);
}finally {
  console.log("This will run no matter what.");
}

let e = new Error("Error msg");
console.log(e)
// error properties
console.log(e.message)
console.log(e.stack)

function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

function check() {
  return new Promise((res, rej)=> {
    rej("Error detected")
  });
}
check().then((mail) => {
  console.log(mail);
})
.catch((err) => {
  console.error(err);
})
.finally(() => {
  console.log('Experiment completed');
});