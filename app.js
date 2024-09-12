

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
    fetch(`http://api.weatherapi.com/v1//current.json?key=9da2e733fd05417db69161750241209&q=${location}`,reop)
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
  };
  