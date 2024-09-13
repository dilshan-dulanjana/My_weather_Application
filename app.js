

console.log(" ==================");
console.log(" Hello world.....");
console.log(" ==================");


// -------------------------------------------------updateLocalTime-----------------------------

function updateLocalTime() {
    const localTimeElement = document.getElementById("local-time");
    const now = new Date();
    const localTimeString = now.toLocaleTimeString();
  
    localTimeElement.textContent = `${localTimeString}`;
  }
  
  updateLocalTime();
  
  setInterval(updateLocalTime, 1000);


  document.getElementById("btnsearch").onclick = function(){

    let location = document.getElementById("txtlocation").value;

     
    let reop ={
      method:"Get"

    }
    fetch(`https://api.weatherapi.com/v1//current.json?key=9da2e733fd05417db69161750241209&q=${location}`,reop)
       .then(response=>response.json())
       .then(data =>{
        console.log(data);
        document.getElementById("location").innerHTML=data["location"]["name"];
        document.getElementById("temp_c").innerHTML=data["current"]["temp_c"];
        document.getElementById("dscription").innerHTML=data["current"]["condition"]["text"];
        document.getElementById("country").innerHTML=data["location"][ "country"];
        document.getElementById("tz_id").innerHTML=data["location"]["tz_id"];
        document.getElementById("humidity").innerHTML=data["current"]["humidity"];
        document.getElementById("wind_kph").innerHTML=data["current"]["wind_kph"];
        document.getElementById("url").innerHTML=data["current"]["condition"]["text"];
        document.getElementById("wind_kph").innerHTML=data["current"]["wind_kph"];
        document.getElementById("region").innerHTML=data["location"]["region"];
        document.getElementById("countrys").innerHTML=data["location"][ "country"];
        document.getElementById("lon").innerHTML=data["location"]["lon"];
        document.getElementById("lat").innerHTML=data["location"]["lat"];

        document.getElementById("weatherIcon").src=data["current"]["condition"]["icon"];
        document.getElementById("local-times").innerHTML=data["location"]["localtime"];
    
       })
       .then(error=>console.log(" Error",error))
       fetchfastForecast(location);
       Viewmap(data["location"]["lon"],innerHTML=data["location"]["lat"]);
  };

// -------------------------------------------------weather forcast-----------------------------
  function fetchfastForecast(searchVal) {
    const startDate = new Date();
    let currentDay = new Date(startDate);

    for (let i = 3; i >= 0; i--) {
        const formattedDate = currentDay.toISOString().split('T')[0];
 
        
        (function (index) { 
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=5d7a25b2cad54f73bb0112953240203&q=${searchVal}&days=8&dt=${formattedDate}&aqi=yes&alerts=yes`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById(`date${index}`).innerHTML = data.forecast.forecastday[0].date;
                    document.getElementById(`img${index}`).src = data.forecast.forecastday[0].day.condition.icon;

                    document.getElementById(`title${index}`).innerHTML = data.forecast.forecastday[0].day.condition.text;

                });
        })(i); 
        currentDay.setDate(currentDay.getDate() - 1);
    }

    currentDay = new Date(startDate);
    for (let i = 4; i <= 7; i++) { 
     
      currentDay.setDate(currentDay.getDate() + 1); 
      const formattedDate = currentDay.toISOString().split('T')[0];

      
      (function (index) {
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=5d7a25b2cad54f73bb0112953240203&q=${searchVal}&days=8&dt=${formattedDate}&aqi=yes&alerts=yes`)
              .then(response => response.json())
              .then(data => {
                  document.getElementById(`date${index}`).innerHTML = data.forecast.forecastday[0].date;
                  document.getElementById(`img${index}`).src = data.forecast.forecastday[0].day.condition.icon;
                  document.getElementById(`title${index}`).innerHTML = data.forecast.forecastday[0].day.condition.text;

              });
      })(i); 
     
  }


}

// -------------------------------------------------End of weather forcast-----------------------------


function Viewmap(longitude,latitude){
// Initialize the map and set its view to a specific lat, lon, and zoom level
var map = L.map('map').setView([latitude, longitude], 13); // San Francisco coordinates

// Add OpenStreetMap tiles to the map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optional: Add a marker at the center
L.marker([37.7749, -122.4194]).addTo(map)
  .bindPopup('San Francisco')
  .openPopup();



}
  