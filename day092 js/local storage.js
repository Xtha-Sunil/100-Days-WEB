// they are different from cookies because data stored in local storage are not send to sever on every request.
  // once datasaved to local storage it will not get delete even if we refresh the page or reload the browser

  let key = "name";
  let val = prompt("your name");

  // set item
  localStorage.setItem(key, val);
  localStorage.setItem("color", "red");
  localStorage.setItem("size", 20);
  // get item
  console.log("hello " + localStorage.getItem(key));
  // remove item
  localStorage.removeItem("size");
  // clears the local storage
  localStorage.clear();