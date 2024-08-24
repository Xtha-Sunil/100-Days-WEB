change = (element, edit) => {
  element.classList.toggle("active");
  document.getElementById("inp").classList.toggle(edit);
};

alignText = (element, alignType) => {
  document.getElementById("inp").style.textAlign = alignType;

  //all align formatting tools
  const btn = document.querySelectorAll(".align");
  //making array to use map function
  const btnArr = Array.from(btn);

  btnArr.map((button) => {
    //remove highlight
    button.classList.remove("active");
  });
  //add highlight
  element.classList.toggle("active");
};

copy = (element) => {
  let txt = document.querySelector('#inp').value;
  navigator.clipboard.writeText(txt);
}