const $ = document;

const surface = $.querySelector(".surface");
const car = $.querySelector(".car");
const carImg = $.querySelector(".car img");

let isLightOn = true;

window.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    surface.classList.toggle("moveRight");
    car.classList.toggle("suspension");
  }

  if (e.code === "Space") {
    if (isLightOn) {
      carImg.setAttribute("src", "images/Img_05.png");
      isLightOn = false;
    } else {
      carImg.setAttribute("src", "images/Img_06.png");
      isLightOn = true;
    }
  }
});
