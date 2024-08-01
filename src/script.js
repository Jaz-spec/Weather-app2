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
  let city = document.querySelector("#city");
  let description = document.querySelector("#description");
  let temperature = document.querySelector("#temperature");
  let humidity = document.querySelector("#humidity");
  let windspeed = document.querySelector("#windspeed");
  let dateElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);
  let currentTemperature = Math.round(response.data.temperature.current);

  city.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  temperature.innerHTML = `${currentTemperature}°C`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windspeed.innerHTML = `${response.data.wind.speed} km/h`;
  dateElement.innerHTML = formDate(date);

  console.log(response);
}

//form date
function formDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${day}, ${hours}:${minutes}`;
}
