function calculate(a, b) {
  let sum = a+b;
  let product = a*b;
  let diff = a-b;
  let rem = a%b;

  return [sum, product, diff, rem];
}

// calculate all
let [sum, product, diff, rem] = calcuate(8, 7);
console.log(sum, product, diff, rem);

// if we want to calculate only sum and remiander
// we can add comma
let [sum2,,,rem2] = calculate(8, 7);

// object destruction
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
};

myVehicle(vehicleOne);
function myVehicle( { model, registration: { state }, year}) {
  const message = 'My ' + model + ' is registered in ' + state + ' in the year ' + year;
}