var appid = "3de3f45fef91dfdfd3378f39fe973f00";
var city = "san diego";

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
      document.querySelector(".mainSection").innerText = data.main.temp;
    });
}

getFetch();
