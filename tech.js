let now = new Date();
let currentTime = document.querySelector("#time");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentTime.innerHTML = `${day} ${hours}:${minutes} `;

function clicks(event) {
  event.preventDefault();
  let celLink = document.querySelector(".smile");
  celLink.innerHTML = 20;
}
let button1 = document.querySelector("#celsius-link");
button1.addEventListener("click", clicks);

function press(event) {
  event.preventDefault();
  let fahLink = document.querySelector(".smile");
  fahLink.innerHTML = 50;
}
let button3 = document.querySelector("#fahrenheit-link");
button3.addEventListener("click", press);

function showTemperature(response) {
  document.querySelector(".smile").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#location").innerHTML = response.data.name;
}
function search(event) {
  debugger;
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let location = document.querySelector("#location");
  location.innerHTML = `${searchInput.value}`;
  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "311f1f45fee82242ab4086372ab360f5";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function loadPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
}
let form = document.querySelector("#form");
form.addEventListener("submit", search);

let currentButton = document.querySelector(".currentLocation");
currentButton.addEventListener("click", loadPosition);
