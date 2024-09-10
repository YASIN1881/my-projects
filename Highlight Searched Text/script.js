const $ = document;

const paragraph = $.querySelector("#paragraph");
const search = $.querySelector("button");
const textToSearch = $.querySelector("#text-to-search");

let searchPh = () => {
  let valueText = textToSearch.value;
  let regexText = new RegExp(valueText, 'gi');
  paragraph.innerHTML = paragraph.textContent.replace(regexText, (text) => `<mark>${text}</mark>`)
};

search.addEventListener("click", searchPh);
