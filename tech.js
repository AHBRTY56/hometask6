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

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let location = document.querySelector("#location");
  location.innerHTML = `${searchInput.value}`;
}

let button = document.querySelector("#form");
button.addEventListener("submit", search);

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
  let temperature = Math.round(response.data.main.temp);
  let message = `There is ${temperature} deegres.`;
  let rain = document.querySelector("#rain");
  rain.innerHTML = message;
}
function showPossition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPossition);
