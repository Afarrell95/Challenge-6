var apiKey = "3de3f45fef91dfdfd3378f39fe973f00";
var searchBtn = document.querySelector("searchBttn");
var city = "san diego";
function getFetch() {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // var city = document.querySelector("input").value;
      document.querySelector(".temperature").innerHTML =
        "Temp:" + data.main.temp;
      document.querySelector(".wind").innerHTML = "Wind:" + data.wind.speed;
      document.querySelector(".humid").innerHTML =
        "Humidity:" + data.main.humidity;
    });
}
// searchBtn.addEventListener("click", getFetch);
getFetch();
