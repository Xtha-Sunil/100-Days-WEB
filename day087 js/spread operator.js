let num1 =[1,2,3];
let num2 = [4,5,6];
const log = console.log.bind(document);

let numAll = [...num1, ...num2];
log(numAll);  // [1,2,3,4,5,6]

// we can combine it with destruction 
let num = [1,2,3,4];

let [one, two, ...rest] = num;
log(typeof(one), one); //number 1
log(typeof(two), two); //number 1
log(typeof(rest), rest); //object [3,4]

// we can use it in objects as well
let obj1 = {
  name: 'sunil',
  age: '19'
};
let obj2 = {
  grade : 12,
  name: "sunil shrestha"
};

//this will make new object with combined property and if the property is overlap then the value of last included object will be assigned
let obj3 = {...obj1, ...obj2};
log(obj3); 
/*
name:sunil shrestha   // name on last included object
age:19
grade:12
*/