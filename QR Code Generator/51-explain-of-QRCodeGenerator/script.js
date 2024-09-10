const $ = document;

const wrappper = $.querySelector(".wrapper");
const input = $.querySelector("input");
const buttonGenerateQR = $.querySelector("button");
const imgQR = $.querySelector(".qr-code img");

const creatQR = () => {
  let valueQR = input.value.trim();
  if (valueQR) {
    buttonGenerateQR.innerHTML = "Generating QR Code ...";
    imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${valueQR}`;
    imgQR.addEventListener("load", () => {
      wrappper.classList.add("active");
      buttonGenerateQR.innerHTML = "QR Code";
    });
  }
};

const removeActiveWrapper = () => {
  if (input.value.length === 0) {
    buttonGenerateQR.innerHTML = "Generate QR Code";
    wrappper.classList.remove("active");
    imgQR.src = "";
  }
};

buttonGenerateQR.addEventListener("click", creatQR);
input.addEventListener("keyup", removeActiveWrapper);
