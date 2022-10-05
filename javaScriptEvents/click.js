const title = document.querySelector(".click");
const paragraph = document.querySelector(".textCopy");

const clicked = () => {
  alert("You click me!");
};

const copyText = () => {
  alert("Copy!");
};

const textModified = () => {
  const input = document.querySelector(".input");
  input.innerHTML = input.value;
};

title.addEventListener("click", clicked);
paragraph.addEventListener("copy", copyText);
