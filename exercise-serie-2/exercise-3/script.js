//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
var cookiecount = 0;

function add () {

cookiecount = cookiecount + 1 ;
document.getElementById('text').value = cookiecount;
document.title = cookiecount + "cookies";

}

function myFunction() {
    location.reload();
 }