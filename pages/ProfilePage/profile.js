// =========================================
// Mobile nav toggle
const open_nav_btn = document.querySelector(".fa-bars");
const close_nav_btn = document.querySelector(".fa-x");
const navigation_link_container = document.querySelector(
  ".navigation_link_container"
);

// ====================================
// open side bar toggle
const group_chat_btn = document.querySelectorAll("#group_chat_btn");
const back_icon = document.querySelector(".back_icon");
const network_container = document.querySelector(".network_container");

// ==============================
// open nav
open_nav_btn.addEventListener("click", () => {
  navigation_link_container.classList.add("open_nav");
});

// ==============================
// close nav
close_nav_btn.addEventListener("click", () => {
  navigation_link_container.classList.remove("open_nav");
});
