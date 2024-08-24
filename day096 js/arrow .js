const sayHello = name=> {
  console.log("hello" + name);
};
sayHello("Sunil");

const x = {
  name: "sunil",
  role: "Reverse Engineer",
  exp: 20,
  show: function() {
      console.log(this.exp)
    setTimeout(()=> {
      console.log(this.role)
    }, 1000);
  }
};
console.log(x.name + " name");
x.show();