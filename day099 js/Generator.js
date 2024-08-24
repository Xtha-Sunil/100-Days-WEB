function* generateSequence(start, end) {
  for (let i = start; i <= end; i++)
    yield i;
}
const iterator1 = generateSequence(1, 3);

console.log(iterator1.next()); // { value: 1, done: false }
console.log(iterator1.next()); // { value: 2, done: false }
console.log(iterator1.next()); // { value: 3, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }




function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = myGenerator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.return(4)); // {value: 4, done: true}
console.log(iterator.next()); // {value: undefined, done: true}

// In this example, the return() method is called on the iterator object after the second value is yielded. This causes the generator function to exit early and return {value: 4, done: true}. When the next() method is called again, the function has already exited, so it returns {value: undefined, done: true}.