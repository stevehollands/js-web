//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function update() {
    document.getElementById('text').value = cookiecount;
    document.title = cookiecount + " cookies"
    document.getElementById('amountAutoClick').innerHTML = "You own" + autoClick + " AutoClikers";
    document.setElementById('costAutoClick').innerHTML = ((autoClick + 1)*12) + " Cookies";
    }


var cookiecount = 0;
var autoClick = 0;

function timer(){
    cookiecount = cookiecount + autoClick;
    update()
    
    }
    setInterval(timer, 1000)


function add () {
cookiecount = cookiecount + 1 ;
update();
}

function myFunction() {
    location.reload();
 }
function save(){ 
    localStorage.setItem("cookiecount", cookiecount);
    localStorage.setItem("autoClick", autoClick);
}
function load() { 
    cookiecount = localStorage.getItem("cookiecount");
    cookiecount = parseInt(cookiecount);
    update()         
}
function buyAutoClick(){
if (cookiecount >= (autoClick + 1)*12){
    cookiecount = cookiecount - ((autoClick + 1)*12);
    autoClick = autoClick + 1
    update()
}

}

//bounce animation
 element = document.getElementById("img");

element.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("bounce");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  element.offsetWidth = element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("bounce");
}, false);

