const menuBar = document.querySelector(".menu-bar");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("nav-links");

menuBar.addEventListener("click", function () {
  navLinks.classList.remove("translate-x-full");
  navLinks.classList.add("translate-x-0");
});

closeIcon.addEventListener("click", function () {
  navLinks.classList.remove("translate-x-0");
  navLinks.classList.add("translate-x-full");
});

document.addEventListener("scroll", function () {
  navLinks.classList.remove("translate-x-0");
  navLinks.classList.add("translate-x-full");
});
