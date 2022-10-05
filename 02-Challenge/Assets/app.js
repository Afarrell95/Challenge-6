// var apiKey = "3de3f45fef91dfdfd3378f39fe973f00";
var searchBtn = document.querySelector("searchBttn");
var city = "san diego";

function getFetch() {
  const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=3de3f45fef91dfdfd3378f39fe973f00";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // var city = document.querySelector("input").value;
      document.querySelector(".temperature").innerHTML =
        "Temp:" + data.current.temp;
      document.querySelector(".wind").innerHTML =
        "Wind:" + data.current.wind_speed;
      document.querySelector(".humid").innerHTML =
        "Humidity:" + data.current.humidity;
    });
}

getFetch();
