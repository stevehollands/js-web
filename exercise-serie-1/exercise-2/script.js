//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

document.getElementById("+").addEventListener("click", () => {
    let value1 = document.getElementById("x").value;
    let value2 = document.getElementById("y").value;
    let value = (parseInt(value1) + parseInt(value2));
    document.getElementById("resultaat").value = value;
  });

document.getElementById("-").addEventListener("click", () => {
    let value1 = document.getElementById("x").value;
    let value2 = document.getElementById("y").value;
    let value = (parseInt(value1) - parseInt(value2));
    document.getElementById("resultaat").value = value;
  });

document.getElementById("*").addEventListener("click", () => {
    let value1 = document.getElementById("x").value;
    let value2 = document.getElementById("y").value;
    let value = (parseInt(value1) * parseInt(value2));
    document.getElementById("resultaat").value = value;
  });

document.getElementById("/").addEventListener("click", () => {
    let value1 = document.getElementById("x").value;
    let value2 = document.getElementById("y").value;
    let value = (parseInt(value1) / parseInt(value2));
    document.getElementById("resultaat").value = value;
  });