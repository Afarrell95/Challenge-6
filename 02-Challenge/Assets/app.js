

function getFetch() {
  
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=3de3f45fef91dfdfd3378f39fe973f00`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); 
}

getFetch()