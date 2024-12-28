/** @format */

// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  const user_name = document.querySelector(".user_name");
  const user_profile_name = document.querySelector(".user_profile_name");

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

// New functionality like share add and download
const Love_Like_image_Container = document.querySelectorAll(
  ".love_like_Image_container"
);
const Share_image = document.querySelectorAll(".share_image");
const Add_image = document.querySelectorAll(".add_image");
const like_text = document.querySelectorAll(".like_text");
const Download_image = document.querySelectorAll(".download_image");

// Like and love functionality
Love_Like_image_Container.forEach((image_icon) => {
  image_icon.addEventListener("click", (e) => {
    // toggle class showImage to add different image
    e.currentTarget.classList.toggle("showImage");
  });
});

// Like and love functionality for comment section
like_text.forEach((like) => {
  like.addEventListener("click", (e) => {
    // get the current click like image
    const like_image = e.target.parentElement.children[0];
    like_image.classList.toggle("showImage");
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

// comment icon
Add_image.forEach((comment) => {
  comment.addEventListener("click", (e) => {
    // Getting click icon specific comment modal
    const ParentContainer =
      e.currentTarget.parentElement.parentElement.parentElement;
    const commenting_modal = ParentContainer.querySelector(".comment_modal");
    commenting_modal.classList.add("showFlex");
  });
});

// =====================================================
// comment section functionalities
// comment active function
const comment_icon = document.querySelectorAll(".comment_icon");
const input_send = document.querySelectorAll(".input_send_icon");
const comment_close_btn = document.querySelectorAll(".comment_close_btn");
const commentShare = document.querySelectorAll(".comment_share_image");
comment_icon.forEach((comment_btn) => {
  comment_btn.addEventListener("click", (e) => {
    const GeneralContainer = e.currentTarget.parentElement.parentElement;
    const inputField = GeneralContainer.querySelector("input");
    inputField.focus();
  });
});

// Share function
commentShare.forEach((share) => {
  share.addEventListener("click", (e) => {
    // Getting the particular image  link displayed for the clicked shared
    const ImageLinkShared =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement
        .children[0].src;

    navigator.clipboard.writeText(ImageLinkShared).then(() => {
      alert(`  Link copied  to clipboard!`);
    });
  });
});

// input send functionality
input_send.forEach((send_text) => {
  send_text.addEventListener("click", (e) => {
    // Getting the specific input field of the send icon
    const ParentContainer = e.currentTarget.parentElement.children[1];
    const input = ParentContainer.querySelector("input");

    // Get the comment body
    const comment_container = e.currentTarget.parentElement.parentElement;
    const comment_body = comment_container.querySelector(".comment_body");

    // create new element
    const commenter = document.createElement("div");
    const commenter_img = document.createElement("img");
    const commenter_comment_container = document.createElement("div");
    const commenter_name = document.createElement("h3");
    const commenter_comment = document.createElement("p");

    // new elements class
    commenter.className = "commenter";
    commenter_img.className = "commenter_img";
    commenter_comment.className = "commenter_comment";
    commenter_name.className = "commenter_name";
    commenter_comment_container.className = "commenter_comment_container";

    // new element values
    commenter_img.src = "../../src/images/sarah-james.webp";
    commenter_name.textContent = "current user";
    commenter_comment.textContent = input.value;

    if (input.value === "") {
      return;
    }

    // new element arrangements
    commenter.append(commenter_img);
    commenter_comment_container.appendChild(commenter_name);
    commenter_comment_container.appendChild(commenter_comment);
    commenter.append(commenter_comment_container);

    // append new elements to comment body
    comment_body.append(commenter);

    input.value = "";
  });
});

// close comment functionality
comment_close_btn.forEach((close_btn) => {
  close_btn.addEventListener("click", (e) => {
    const parent_container =
      e.currentTarget.parentElement.parentElement.parentElement.parentElement;
    parent_container.classList.remove("showFlex");
  });
});

const addPostBtn = document.querySelector(".upper_create_post");
const overlay = document.querySelector(".overlay");
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

//close modal functionality
overlay.addEventListener("click", function (e) {
  if (e.target.closest(".modal")) return;
  overlay.classList.add("hidden");
});

addPostBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});
