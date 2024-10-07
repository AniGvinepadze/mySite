
// let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu_btn");
let sideBar = document.getElementById("Side-Bar-Content")
let overlay = document.querySelector(".overlay");
let body = document.body;

menu.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("noScroll");
});
overlay.addEventListener("click", function () {
  sideBar.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("noScroll");
});