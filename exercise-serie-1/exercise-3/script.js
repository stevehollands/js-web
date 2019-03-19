//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function reset() {
    document.getElementById("frm1").reset();
  }

function display() {
  


    let name = document.getElementById("sname").value;
    let power = document.getElementById("spower").value;
    let motivation = document.getElementById("smotiv").value;
    let plan = document.getElementById("splan").value;

    document.getElementById("frm1").innerHTML= ""

    document.getElementById("jos").innerHTML = ["Your name is " +  name + "." + "Your power is " + power + "." + "Your motivation is "+ motivation + "." + "Your plan is " + plan + "."];

}