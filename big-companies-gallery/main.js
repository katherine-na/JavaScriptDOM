const title = document.querySelector("#company-title");
const disneyImage = document.querySelector(".image-disney");
// styles
title.style.textAlign = "center";
// functions
const titleMessage = (e) => {
  console.log(`hello`);
};

// events
const consoleMessage = document.addEventListener("click", titleMessage);
