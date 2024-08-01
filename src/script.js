// search engine function

function searchEngine(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search");
searchElement.addEventListener("submit", searchEngine);
