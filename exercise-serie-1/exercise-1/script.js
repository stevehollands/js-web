//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
document.querySelector(".buttong").addEventListener("click", () => {
    document.querySelector(".black").style.backgroundColor = "green";
  });
document.querySelector(".buttonr").addEventListener("click", () => {
    document.querySelector(".black").style.backgroundColor = "red";
  });
document.querySelector(".buttonb").addEventListener("click", () => {
    document.querySelector(".black").style.backgroundColor = "blue";
  });
