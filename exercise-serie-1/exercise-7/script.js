//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let turn = 0;
let word = document.getElementById("btn");

function move() {

    turn ++

if (turn === 11) {

turn = 0    

}

let btn = document.getElementById("btn")
btn.style.top = Math.floor((Math.random() * 230) + 1) + "px";
btn.style.left = Math.floor((Math.random() * 200) + 1) + "px";
switch(turn) {

    case 0: 
        word.textContent="hahahahahaha"
        break;

    case 1: 
        word.textContent="Cant click me"
        break;

    case 2: 
        word.textContent="Loser"
        break;

    case 3: 
        word.textContent="Cant click me"
        break;

    case 4: 
        word.textContent="Woehahaha"
        break;

    case 5: 
        word.textContent="Cant click me"
        break;

    case 6: 
        word.textContent="Not fast enough"
        break;

    case 7: 
        word.textContent="Cant click me"
        break;

    case 8: 
        word.textContent="yooooooooo!!"
        break;

    case 9: 
        word.textContent="Cant click me"
        break;

    case 10: 
        word.textContent="Nerd"
        break;

}


}

