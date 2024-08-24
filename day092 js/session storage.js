//only saves data for the session
// data survives refresh but opeaning in new tab


// Storage event :- triggered when local or session storage is updated
localStorage.setItem("name", "sunil");
localStorage.setItem("name", "sunilXtha");
window.onstorage = (e)=> {
  console.log(e);
};


// getting, setting,clear are same as localStorage

let p = confirm("do you want to clear storage");
if(p){
  sessionStorage.clear();
}

