//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function reset() {
    document.getElementById("frm1").reset();
  }

function display() {

    let name = document.getElementById("sname").value;
    let power = document.getElementById("spower").value;
    let motivation = document.getElementById("motiv").value;
    let plan = document.getElementById("splan").value;

    //erase Form and buttons


    document.getElementById("frm1").innerHTML = "";



}