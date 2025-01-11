"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//Here we are querySelectorAll bcz if we use querySelector only than only the first ".show-modal" class will be accessed.
const btnShowModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnShowModal.length; i++) {
  //Here one point to note is, if we pass a function with argument after the event so the function will execute directly, it will not wait for the event to happen...so if we want to pass the argument and also we want that function will wait for the event. In this case we need to write an anonymous function after the event and then call our main logic function(with argument) inside that anonymous function or arrow function.....But do not call your main logic function with event if you want to pass an argument, bcz it will than not wait for that event to happen...
  btnShowModal[i].addEventListener("click", () => {
    //Here we are calling our main doIt() function with argument inside an arrow function  so that it will wait for the event to happen...
    doIt(i);
  });
}

function doIt(no) {
  console.log(`${no} Button Clicked!!`);
  //here we are removing the hidden class from our modal. one thing to note do not use ".hidden" here bcz, here we are not selecting the hidden class but we are just passing the name of the class to remove.And we can also remove multiple class int same function just pass the name separated by comma like modal.classList.remove("hidden", "abc", "xyz", ...etc)
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}