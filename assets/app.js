var searchBttn = document.querySelector(".searchBttn");
var searchInput = document.querySelector("input");
var today = document.querySelector(".todays-date");
var historyDisplay = document.querySelector(".history-list");

const toadysDate = moment().format("MM-DD-YY");
today.innerHTML = toadysDate;

//make search value the city input for geo api

function loadHistory() {
  let list = document.createElement("li");
  list.textContent = localStorage.getItem("history");
  historyDisplay.appendChild(list);
}

let lat;
let lon;

let buttnFunc = searchBttn.addEventListener("click", function (e) {
  event.preventDefault();
  localStorage.setItem("history", searchInput.value);
  const city = searchInput.value;
  console.log(city);
  //   if (city) {
  //     getCity();
  //   }
  // });

  // function getCity() {
  const geoUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=1743d618c4fefd71fcce229c23abd52a";
  fetch(geoUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      lat = data[0].lat;
      lon = data[0].lon;

      const url =
        "https://api.openweathermap.org/data/3.0/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly&appid=3de3f45fef91dfdfd3378f39fe973f00&units=imperial";

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //current day
          document.querySelector(".temperature").innerHTML =
            "Temp:" + data.current.temp;
          document.querySelector(".wind").innerHTML =
            "Wind:" + data.current.wind_speed;
          document.querySelector(".humid").innerHTML =
            "Humidity:" + data.current.humidity;
          document.querySelector(".uvi").innerHTML =
            "UV Index:" + data.current.uvi;
          //fdf day one
          document.querySelector(".day-one-temp").innerHTML =
            "temp: " + data.daily[0].temp.day;
          document.querySelector(".day-one-wind").innerHTML =
            "wind: " + data.daily[0].wind_speed;
          document.querySelector(".day-one-humid").innerHTML =
            "hum: " + data.daily[0].humidity;
          //fdf day two
          document.querySelector(".day-two-temp").innerHTML =
            "temp: " + data.daily[1].temp.day;
          document.querySelector(".day-two-wind").innerHTML =
            "wind: " + data.daily[1].wind_speed;
          document.querySelector(".day-two-humid").innerHTML =
            "hum: " + data.daily[1].humidity;
          //fdf day three
          document.querySelector(".day-three-temp").innerHTML =
            "temp: " + data.daily[2].temp.day;
          document.querySelector(".day-three-wind").innerHTML =
            "wind: " + data.daily[2].wind_speed;
          document.querySelector(".day-three-humid").innerHTML =
            "hum: " + data.daily[2].humidity;
          //fdf day four
          document.querySelector(".day-four-temp").innerHTML =
            "temp: " + data.daily[3].temp.day;
          document.querySelector(".day-four-wind").innerHTML =
            "wind: " + data.daily[3].wind_speed;
          document.querySelector(".day-four-humid").innerHTML =
            "hum: " + data.daily[3].humidity;
          //fdf day five
          document.querySelector(".day-five-temp").innerHTML =
            "temp: " + data.daily[4].temp.day;
          document.querySelector(".day-five-wind").innerHTML =
            "wind: " + data.daily[4].wind_speed;
          document.querySelector(".day-five-humid").innerHTML =
            "hum: " + data.daily[4].humidity;
        });
    });
});

function setToLocal() {
  localStorage.setItem("history", searchInput.value);
}

loadHistory();
