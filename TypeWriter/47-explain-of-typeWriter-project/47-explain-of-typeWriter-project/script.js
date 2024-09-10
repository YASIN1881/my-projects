const $ = document;

const text = $.querySelector('#text');

let sentence = "javascript is the front-end language :))";

let counter = 0;

setInterval(() => {

  if (counter === sentence.length) {
    clearInterval();
  } else {
    text.innerHTML += sentence[counter]
    counter++;
  }
}, 100);
