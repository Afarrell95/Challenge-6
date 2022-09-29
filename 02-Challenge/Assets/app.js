var appid = "3de3f45fef91dfdfd3378f39fe973f00";
var city = "Savannah";

function getFetch() {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    appid;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getFetch();
