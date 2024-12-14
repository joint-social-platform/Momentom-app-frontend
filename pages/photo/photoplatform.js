/** @format */

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

// New functionality like share add and download
const Love_Like_image_Container = document.querySelectorAll(
  ".love_like_Image_container"
);
const Share_image = document.querySelectorAll(".share_image");
const Add_image = document.querySelectorAll(".add_image");
const Download_image = document.querySelectorAll(".download_image");

// Like and love functionality
Love_Like_image_Container.forEach((image_icon) => {
  image_icon.addEventListener("click", (e) => {
    // toggle class showImage to add different image
    e.currentTarget.classList.toggle("showImage");
  });
});

// Download Image Functionality
Download_image.forEach((download) => {
  download.addEventListener("click", (e) => {
    //  Get the MainParent container

    const ParentContainer =
      e.currentTarget.parentElement.parentElement.parentElement;
    // Get the Image to be downloaded

    // create an a href tag
    const ImgUrl = ParentContainer.children[0].src;

    // Get name of Image
    const ImageName = ParentContainer.children[1].children[0].children[1];

    // create an a href tag  cause the download functionality work only on it
    const newLinkContainer = document.createElement("a");
    newLinkContainer.href = ImgUrl;
    newLinkContainer.download = `${ImageName.textContent} Image.jpg`;

    // Trigger download
    newLinkContainer.click();
  });
});

// Share Image functionality
Share_image.forEach((share) => {
  share.addEventListener("click", (e) => {
    //  Get the MainParent container

    const MainParentContainer =
      e.currentTarget.parentElement.parentElement.parentElement;

    //Get Parent container
    const ParentContainer = e.currentTarget.parentElement;

    // Get Shared Link Modal
    const ShareLinkModal = ParentContainer.querySelector(".shareImageLink");

    // Get Link
    const Link = MainParentContainer.children[0].src;

    // Link container
    const LinkContainer = ShareLinkModal.children[0];

    LinkContainer.textContent = Link;

    ShareLinkModal.classList.add("show");

    // Get copy button
    const CopyBtn = ShareLinkModal.children[1];

    CopyBtn.addEventListener("click", () => {
      // Use Clipboard API to copy the text
      navigator.clipboard.writeText(Link).then(() => {
        alert("Link copied to clipboard!");
      });
    });

    setTimeout(() => {
      ShareLinkModal.classList.remove("show");
    }, 4000);
  });
});
