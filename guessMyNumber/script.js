"use strict";
let score = Number(document.querySelector(".score").innerHTML);

//Math is a class of JS, (.trunc()) will convert it into a whole number and (.random()) will generate a random number between 0 and 1, but not 1...So to get random numbers between 0 to 20 we are multiplying it by 20. We are adding +1, bcz as i told you it will generate between 0 to 0.9999 but not 1, so to get numbers from 0 to 20 we are adding +1 and by this our number will never be 0.
const randomNumber = Math.trunc(Math.random() * 100) + 1;

function logic() {
  //Here we are taking the value from the text box, which have the class "guess", as this a class, so we use (.) before it.(.value) is used to extract exact text written inside it...But (.value) will always return a string. so to use a number we have to convert it to the string...

  const num = document.querySelector(".guess").value;

  if (num == "") {
    //Here we are changing the text inside our ".message" class if no numbr is enetered by using ".textContent".
    document.querySelector(".message").textContent = "NO Number entered!!";
  } else if (Number(num) < randomNumber && score > 0) {
    document.querySelector(".message").textContent = "Go High Bro!!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(num) > randomNumber && score > 0) {
    document.querySelector(".message").textContent = "Come Down Bro!!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (Number(num) === randomNumber && score > 0) {
    document.querySelector(".message").textContent = "Yeah!! you win!!";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = randomNumber;
    //Whenever we are modifying style elements in JS we must specify or give value as string. and whwnever we are accessing a property of CSS which have two words like "background-color", but in JS everything changes to camelCasing...like(backgroundColor)...
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else {
    document.querySelector(".message").textContent = "YOU LOOSER!!!";
    document.querySelector(".highscore").textContent = score;
  }
}

/* Here we are creating an event listener to our button, which will execute
the function defined inside it, when that click happen...
->Generally, Eventlistener has two arguments...eventListener("event", func())
1. An event on occurence of which that particular function executes.
2. The function which executes  after the event happened. */
document.querySelector(".check").addEventListener("click", handleEvent);
document.querySelector(".guess").addEventListener("keydown", handleEvent);

//Here we are checking which event is occuring whether there is a click or Enter key pressed...
function handleEvent(event) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    //event.preventDefault();
    logic();
  }
}
//================================================================================
/* here we are implementing logic for Again button which will reset the game values and color to the initial value */

document.querySelector(".again").addEventListener("click", reset);

function reset() {
  document.querySelector(".message").textContent = "Start Guessing!!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".highscore").textContent = score;
  score = 10;
  document.querySelector(".score").textContent = 10;
  document.querySelector(".guess").value = "";
}
