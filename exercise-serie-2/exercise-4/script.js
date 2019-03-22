//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://character-database.becode.xyz/', true)

request.onload = function (){
// Begin accessing JSON data here

var data = JSON.parse(this.response)


if (request.status >= 200 && request.status < 400){
} 
