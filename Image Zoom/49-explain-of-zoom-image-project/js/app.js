const $ = document;

const container = $.querySelector(".container");
const img = $.querySelector("img");

const zoomImgIn = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    img.style.transform = "scale(2)";
    img.style.transformOrigin = `${x}px ${y}px`;
};

const zoomImgOut = () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center";
};

img.addEventListener("mousemove", zoomImgIn);
img.addEventListener("mouseout", zoomImgOut);
