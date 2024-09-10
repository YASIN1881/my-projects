const $ = document;
const wrapper = $.querySelector(".wrapper");
const selectBtn = $.querySelector(".select-btn");
const options = $.querySelector(".options");
const searchInput = $.querySelector(".search input");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function addCountry() {
  countries.forEach((country) => {
    options.innerHTML += `<li onclick="selectCountry(this)">${country}</li>`;
  });
}

window.addEventListener("load", addCountry);

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

function selectCountry(li) {
  searchInput.value = "";
  let countryValue = li.innerHTML;
  selectBtn.firstElementChild.innerHTML = countryValue;
  const liTags = options.querySelectorAll("li");
  liTags.forEach((li) => {
    li.classList.remove("selected");
  });
  li.classList.add("selected");
  wrapper.classList.toggle("active");
}

searchInput.addEventListener("keyup", (e) => {
    let searchWord = searchInput.value.toLowerCase()
    options.innerHTML = ""
    let countryFitlterd = countries.filter( (country) => country.toLowerCase().startsWith(searchWord)).forEach(country =>  options.innerHTML += `<li onclick="selectCountry(this)">${country}</li>`)

    

});

