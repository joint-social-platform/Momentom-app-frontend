// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  const user_name = document.querySelector(".user_name");

  if (localStorage.getItem("User_Name")) {
    user_name.textContent = localStorage.getItem("User_Name");
  }
});

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

const dropZone = document.getElementById("drop-zone");
const fileInput = document.querySelector(".file-input");
const output = document.getElementById("output");
const removeFile = document.querySelector(".remove-file");

dropZone.addEventListener("click", (e) => {
  if (e.target.closest(".remove-file")) return;
  fileInput.click();
});

removeFile.addEventListener("click", () => {
  if (output.src) output.src = "";
  fileInput.value = "";
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    output.src = URL.createObjectURL(file);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("drag-over");
  const file = e.dataTransfer.files[0];
  if (file) {
    fileInput.files = e.dataTransfer.files;
    output.src = URL.createObjectURL(file);
    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  }
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
