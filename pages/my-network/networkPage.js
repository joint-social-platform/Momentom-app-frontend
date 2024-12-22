// =========================================
// Modal
const overlay = document.querySelector(".overlay");
const addPostBtn = document.querySelector(".add_post");

// =========================================
// Sidebar container
const Nav_toggle_btn = document.querySelector(".nav_toggle_container");
const Sidebar_container = document.querySelector(".side_bar_container");

// =========================================
// Sidebar container functionality
Nav_toggle_btn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("change");
  Sidebar_container.classList.toggle("open_side_bar_container");
});

// =========================================
//close modal functionality
overlay.addEventListener("click", function (e) {
  if (e.target.closest(".modal")) return;
  overlay.classList.add("hidden");
});

addPostBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

// =========================================
// Remove Element
const RemoveBtn = document.querySelectorAll(".remove");

// Remove functionality
RemoveBtn.forEach((remove) => {
  remove.addEventListener("click", (e) => {
    // get the click parent
    const removeParent = e.currentTarget.parentElement;
    removeParent.remove();
  });
});

// =========================================
// Search element
const SearchBtn = document.querySelector(".search_icon");
const mobileSearchContainer = document.querySelector(".search_modal_mobile");
const mobileCancelIcon = document.querySelector(".mobile_cancel_icon");

// Search functionality
SearchBtn.addEventListener("click", () => {
  mobileSearchContainer.classList.add("show_mobile_search");
});

mobileCancelIcon.addEventListener("click", () => {
  mobileSearchContainer.classList.remove("show_mobile_search");
});
