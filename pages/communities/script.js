// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  const user_name = document.querySelector(".user_name");
  const user_profile_name = document.querySelector(".user_profile_name");
  const addPostBtn = document.querySelector(".upper_create_post");
  const overlay = document.querySelector(".overlay");
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.querySelector(".file-input");
  const output = document.getElementById("output");
  const removeFile = document.querySelector(".remove-file");
  const closeModal = document.querySelector(".close-modal");

  closeModal.addEventListener("click", function () {
    overlay.classList.add("hidden");
  });

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

  //close modal functionality
  overlay.addEventListener("click", function (e) {
    if (e.target.closest(".modal")) return;
    overlay.classList.add("hidden");
  });

  addPostBtn.addEventListener("click", function () {
    overlay.classList.remove("hidden");
  });

  if (localStorage.getItem("User_Name")) {
    user_name.textContent = localStorage.getItem("User_Name");
    user_profile_name.textContent = localStorage.getItem("Full_Name");
  }
});

const sidebar = document.getElementById("sidebar");
const navigation = document.getElementById("navigation-icons");

const hamburgerClick = () => {
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
    sidebar.style.transition = "ease 1s linear";
    document.querySelector("#cross-icon").style.display = "none";
    document.querySelector("#hamburger-icon").style.display = "flex";
  } else {
    sidebar.style.display = "flex";
    sidebar.style.transition = "ease 1s linear";
    document.querySelector("#cross-icon").style.display = "flex";
    document.querySelector("#hamburger-icon").style.display = "none";
  }
};

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  sidebar.style.display = "flex";
} else {
  console.log("Screen size is larger than 768px.");
}

// Listen for changes
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    sidebar.style.display = "flex";
    console.log("Switched to a smaller screen.");
  } else {
    console.log("Switched to a larger screen.");
  }
});


const harmburger = document.getElementById("harmburger");
const navbarMenu = document.getElementById("navbarMenu");

let iconChage = true;

harmburger.addEventListener("click", (event) => {
  navbarMenu.classList.toggle("drop");
  event.stopPropagation();

  if (iconChage) {
    harmburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    harmburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  iconChage = !iconChage;
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);
console.log(getComputedStyle(document.querySelector('.main-content img')));
document.addEventListener("DOMContentLoaded", initializeNavigation);
// // Initialize when DOM is loaded
// <<<<<<< HEAD
// document.addEventListener('DOMContentLoaded', initializeNavigation);
// console.log(getComputedStyle(document.querySelector('.main-content img')));
// =======
// document.addEventListener("DOMContentLoaded", initializeNavigation);
// >>>>>>> 9ca6b736f95739034ec8c87b3a39aeda526217a9

