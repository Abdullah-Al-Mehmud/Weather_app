const apiKey = "328b39f3f54ebc35bfeab750e5be9559";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = `${data.main.temp}
  °c`;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
}

checkWeather();
