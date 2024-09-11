

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
  