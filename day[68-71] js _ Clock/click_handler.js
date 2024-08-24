//hilighter
let nav = document.querySelector("nav");
let arr = Array.from(nav.children);

let project = document.querySelectorAll(".project");
let arr2 = Array.from(project);

arr.forEach((elem)=> {
  elem.addEventListener("click", ()=> {
    arr.forEach((item)=> {
      item.classList.remove("active");
      arr2[arr.indexOf(item)].classList.add("hidden");
    })
    elem.classList.add("active");
    arr2[arr.indexOf(elem)].classList.remove("hidden");
  })
})