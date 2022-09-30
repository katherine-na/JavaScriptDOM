const title = document.querySelector("#company-title");
const images = document.querySelectorAll("img");
const imagesArray = [...images];
console.log(imagesArray);

const widthAndHeight = imagesArray.map((image) => {
  image.style.width = "450px";
  image.style.height = "380px";
  image.style.margin = "50px";
});

// styles
title.style.textAlign = "center";

// functions
const titleMessage = (e) => {
  console.log(`hello`);
};

// events
const consoleMessage = document.addEventListener("click", titleMessage);
