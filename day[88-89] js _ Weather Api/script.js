let alertBox = document.querySelector('.alertBox');

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  search();
});

function okBtnClicked() {
  document.querySelector(".okBtnDiv").classList.add("notActive");
  document.querySelector(".load").classList.remove("notActive");
  alertBox.classList.add("notActive");
}
function search() {
  alertBox.classList.remove('notActive');
  let  city = document.getElementById('cityName').value;
  let api = "https://api.openweathermap.org/data/2.5/weather?q=" + city+"&units=metric&appid=944216ceba6d4f5a4c33b3e4b0a6fc02";

  fetch(api).then(function (response) {
    if (response.status == 200) {
      alertBox.classList.add("notActive");
      return response.json();
    }
  }).then(data=> {
    showInfo(data);
  }).catch(err=> {
    document.querySelector(".load").classList.add("notActive");
    document.querySelector(".okBtnDiv").classList.remove("notActive");
  });
}
function showInfo(data) {
  console.log(data)
	const {name} = data;
	const {lon, lat} = data.coord;
	const {country, sunrise, sunset} = data.sys;
	const {timezone} = data;
	const {description, icon } = data.weather[0];
let src = "http://openweathermap.org/img/w/" + icon + ".png";

	const {visibility} = data;
	const {temp, pressure, humidity} = data.main;
	const {speed, deg} = data.wind;

  document.querySelector("#city").innerHTML = name;
  document.querySelector("#lon").innerHTML = lon;
  document.querySelector("#country").innerHTML = country;
  document.querySelector("#lat").innerHTML = lat;

  document.querySelector("#temperature").innerHTML = temp + " &#8451;";
  document.querySelector("#visibility").innerHTML = visibility/1000 + ' km';
  document.querySelector("#wind").innerHTML = speed + " m/s, " + degreesToDirection(deg);
  document.querySelector("#pressure").innerHTML = pressure + " hPa";
  document.querySelector("#humidity").innerHTML = humidity + " %";
  document.querySelector("#sunrise").innerHTML = getTime(sunrise);
  document.querySelector("#sunset").innerHTML = getTime(sunset);
  document.querySelector("#description").innerHTML = "<img src='https://openweathermap.org/img/w/"+icon +".png'> <br>" + description;
  document.querySelector(".abc").classList.remove("notActive");
}

function getTime(sunOffset){
  let date = new Date(sunOffset*1000);
  return date.toLocaleTimeString();
}
function degreesToDirection(degrees) {
  if (degrees >= 337.5 || degrees < 22.5) 
    return "North";
  else if (degrees >= 22.5 && degrees < 67.5) 
    return "North-East";
  else if (degrees >= 67.5 && degrees < 112.5) 
    return "East";
  else if (degrees >= 112.5 && degrees < 157.5) 
    return "South-East";
 else if (degrees >= 157.5 && degrees < 202.5) 
    return "South";
  else if (degrees >= 202.5 && degrees < 247.5) 
    return "South-West";
 else if (degrees >= 247.5 && degrees < 292.5) 
    return "West";
  else 
    return "North-West";
}