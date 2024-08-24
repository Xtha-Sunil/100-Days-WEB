/*
The fetch function in JavaScript is used to make HTTP requests to retrieve data from a server. It returns a Promise that resolves to the Response to that request, whether it is successful or not. The fetch function provides a modern way of making network requests instead of using the older XMLHttpRequest or other third-party libraries.
*/

//todos contains 200 data objects
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});