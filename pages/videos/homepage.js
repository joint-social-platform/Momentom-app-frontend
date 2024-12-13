/** @format */

const sidebar = document.getElementById("sidebar");
const navigation = document.getElementById("navigation-icons");

const hamburgerClick = () => {
  if (navigation.style.display === "flex") {
    navigation.style.display = "none";
    sidebar.style.display = "none";
    document.querySelector("#cross-icon").style.display = "none";
    document.getElementById("arrow").style.rotate = "360deg";
    document.querySelector("#hamburger-icon").style.display = "flex";
  } else {
    navigation.style.display = "flex";
    sidebar.style.display = "none";
    document.getElementById("arrow").style.rotate = "360deg";
    document.querySelector("#cross-icon").style.display = "flex";
    document.querySelector("#hamburger-icon").style.display = "none";
  }
};

const arrowClick = () => {
  if (sidebar.style.display === "flex") {
    document.getElementById("arrow").style.rotate = "360deg";
    sidebar.style.display = "none";
    sidebar.style.transition = "ease 1s linear";
    navigation.style.display = "none";
    document.querySelector("#cross-icon").style.display = "none";
    document.querySelector("#hamburger-icon").style.display = "flex";
  } else {
    sidebar.style.display = "flex";
    sidebar.style.transition = "ease 1s linear";
    document.getElementById("arrow").style.rotate = "180deg";
    navigation.style.display = "none";
    document.querySelector("#cross-icon").style.display = "none";
    document.querySelector("#hamburger-icon").style.display = "flex";
  }
};

const mediaQuery = window.matchMedia("(min-width: 768px)");

if (mediaQuery.matches) {
  console.log("Screen size is 768px or smaller.");
  sidebar.style.display = "flex";
  navigation.style.display = "flex";
} else {
  console.log("Screen size is larger than 768px.");
}

// Listen for changes
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    navigation.style.display = "flex";
    sidebar.style.display = "flex";
    console.log("Switched to a smaller screen.");
  } else {
    console.log("Switched to a larger screen.");
  }
});

// New functionality like share add and download
const Love_Like_image_Container = document.querySelectorAll(
  ".love_like_Image_container"
);
const Add_image = document.querySelectorAll(".add_image");

// Like and love functionality
Love_Like_image_Container.forEach((image_icon) => {
  image_icon.addEventListener("click", (e) => {
    // toggle class showImage to add different image
    e.currentTarget.classList.toggle("showImage");
  });
});
