const news = document.querySelectorAll("#new");

// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  const user_name = document.querySelector(".user_name");
  const user_profile_name = document.querySelector(".user_profile_name");

  if (localStorage.getItem("User_Name")) {
    user_name.textContent = localStorage.getItem("User_Name");
    user_profile_name.textContent = localStorage.getItem("Full_Name");
  }
});

const markAsRead = () => {
  news.forEach((item) => {
    item.style.backgroundColor = "rgba(252, 226, 226, 0.13)";
  });
};


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
