let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// box menu
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active")
}

// like
let heart = document.querySelectorAll(".bxs-heart");

heart.forEach(function (element) {
  element.onclick = () => {
    element.classList.toggle("active");
  }
})

// Read
let read = document.querySelectorAll(".bx-check-circle")

read.forEach(function (element) {
  element.onclick = () => {
    // console.log("click")
    element.classList.toggle("active");
  }
}) 

// remove from DOM
let ex = document.querySelectorAll(".bxs-x-circle");

ex.forEach(function (x) {
  x.onclick = () => {
    console.log(x.closest(".card"))
    x.closest(".card").style.display = "none"
  }
})