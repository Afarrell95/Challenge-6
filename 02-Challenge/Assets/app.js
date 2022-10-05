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
      document.querySelector(".uvi").innerHTML = "UV Index:" + data.current.uvi;

      document.querySelector(".day-one-temp").innerHTML =
        data.daily[0].temp.day;
      document.querySelector(".day-one-wind").innerHTML =
        data.daily[0].wind_speed;
      document.querySelector(".day-one-humid").innerHTML =
        data.daily[0].humidity;

      document.querySelector(".day-two-temp").innerHTML =
        data.daily[1].temp.day;
      document.querySelector(".day-two-wind").innerHTML =
        data.daily[1].wind_speed;
      document.querySelector(".day-two-humid").innerHTML =
        data.daily[1].humidity;

      document.querySelector(".day-three-temp").innerHTML =
        data.daily[2].temp.day;
      document.querySelector(".day-three-wind").innerHTML =
        data.daily[2].wind_speed;
      document.querySelector(".day-three-humid").innerHTML =
        data.daily[2].humidity;

      document.querySelector(".day-four-temp").innerHTML =
        data.daily[3].temp.day;
      document.querySelector(".day-four-wind").innerHTML =
        data.daily[3].wind_speed;
      document.querySelector(".day-four-humid").innerHTML =
        data.daily[3].humidity;

      document.querySelector(".day-five-temp").innerHTML =
        data.daily[4].temp.day;
      document.querySelector(".day-five-wind").innerHTML =
        data.daily[4].wind_speed;
      document.querySelector(".day-five-humid").innerHTML =
        data.daily[4].humidity;
    });
}

getFetch();
