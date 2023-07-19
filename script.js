//your JS code here. If required.
setInterval(setDateTime,1000);


function setDateTime() {
const elem = document.getElementById("timer");
const d= new Date();
elem.innerHTML = d.toLocaleDateString() + ", " +  d.toLocaleTimeString();
	
}