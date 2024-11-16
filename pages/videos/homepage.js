/** @format */

const sidebar = document.getElementById("sidebar");
const navigation = document.getElementById("navigation-icons");

const hamburgerClick = () => {
  if (navigation.style.display === "flex") {
    navigation.style.display = "none";
    sidebar.style.display = "none";
  } else {
    navigation.style.display = "flex";
    sidebar.style.display = "none";
  }
};

const arrowClick = () => {
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
    navigation.style.display = "none";
  } else {
    sidebar.style.display = "flex";
    navigation.style.display = "none";
  }
};
