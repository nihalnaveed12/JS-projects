let userLoc = document.getElementById("location");
let search_btn = document.getElementById("search-btn");
let weatherImg = document.querySelector(".weather-img");
let temperature = document.querySelector(".temp");
let description = document.querySelector(".desc");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

function updateWeather(weatherData) {
  if (weatherData.cod === "404") {
    return alert("Please Enter Valid Location");
  }
  temperature.innerHTML = `${Math.round(
    weatherData.main.temp - 273.15
  )}<sup>°C</sup>`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  wind.innerHTML = `${weatherData.wind.speed}km/h`;

  if (weatherData.weather[0].main === "Clouds") {
    weatherImg.src = "/images/cloud.png";
  } else if (weatherData.weather[0].main === "Smoke") {
    weatherImg.src = "/images/smoke.png";
  } else if (weatherData.weather[0].main === "Rain") {
    weatherImg.src = "/images/rain.png";
  } else if (weatherData.weather[0].main === "Clear") {
    weatherImg.src = "/images/clear-sky.png";
  } else if (weatherData.weather[0].main === "Snow") {
    weatherImg.src = "/images/snowy.png";
  }
  console.log(weatherData);
}

async function checkWeather(city) {
  const api = "42e67330fa199cf3fbba6ad772ba3baf";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  const weatherData = await fetch(url).then((response) => response.json());
  updateWeather(weatherData);
}

async function currentLoc(lat, lon) {
  const api = "42e67330fa199cf3fbba6ad772ba3baf";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

  const weatherData = await fetch(url).then((response) => response.json());
  updateWeather(weatherData);
}

search_btn.addEventListener("click", () => {
  checkWeather(userLoc.value);
});

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      currentLoc(lat, lon);
    });
  } else {
    console.log("geo location is not supported");
  }
});
