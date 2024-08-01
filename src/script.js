let searchElement = document.querySelector("#search");
searchElement.addEventListener("submit", handleSearch);

// search engine function
function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");

  getData(searchInput.value);
}

//retreaiving API
function getData(city) {
  let apiKey = "oa9f439cb230f940atf8b1fac2e41075";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(url).then(refreshWeather);
}

//updating details
function refreshWeather(response) {
  console.log(response);
}
