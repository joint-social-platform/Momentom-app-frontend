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
