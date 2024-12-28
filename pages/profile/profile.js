// ========================================
// close functionality
const close_functionality = (div, classes) => {
  div.classList.remove(classes);
};

// open functionality
const open_functionality = (div, classes) => {
  div.classList.add(classes);
};

// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  const user_name = document.querySelector(".user_name");
  const user_profile_name = document.querySelector(".user_profile_name");

  if (localStorage.getItem("User_Name")) {
    user_name.textContent = localStorage.getItem("User_Name");
    user_profile_name.textContent = localStorage.getItem("Full_Name");
  }
});

// =========================================
// Mobile nav toggle
// const open_nav_btn = document.querySelector(".fa-bars");
// const close_nav_btn = document.querySelector(".fa-x");
// const navigation_link_container = document.querySelector(
//   ".navigation_link_container"
// );

// ====================================
// open side bar toggle
const group_chat_btn = document.querySelectorAll("#group_chat_btn");
const back_icon = document.querySelector(".back_icon");
const network_container = document.querySelector(".network_container");

// ==============================
// open nav
// open_nav_btn.addEventListener("click", () => {
//   open_functionality(navigation_link_container, "open_nav");
// });

// ==============================
// close nav
// close_nav_btn.addEventListener("click", () => {
//   close_functionality(navigation_link_container, "open_nav");
// });

// ==========================================================
// getting side bar elements
const side_bar_contents = document.querySelectorAll(".side_bar_content");
const section_body_container = document.querySelector(
  ".general_section_container"
);

// side bar click functionality
side_bar_contents.forEach((side_bar_content_btn) => {
  side_bar_content_btn.addEventListener("click", (e) => {
    const content_btn = e.currentTarget;
    const back_icon = document.querySelector(".back_icon_container");

    // ====================================
    // adding the class of active to click profile content
    side_bar_contents.forEach((content_btn) => {
      close_functionality(content_btn, "opened_side_bar_content");
    });
    open_functionality(side_bar_content_btn, "opened_side_bar_content");

    // ====================================
    // getting profile content
    if (content_btn.classList.contains("profile")) {
      open_functionality(section_body_container, "show_profile_page");

      // ====================================================
      // a delay function to take 2s before back icon is displayed
      if (section_body_container.classList.contains("show_profile_page")) {
        setTimeout(() => {
          open_functionality(back_icon, "show_profile_page");
        }, 1500);
      }
    }

    // open setting page onclick on setting
    if (content_btn.classList.contains("setting_and_privacy")) {
      window.location.href = "../settings-and-privacy";
    }

    // ====================================
    // closing profile content
    back_icon.addEventListener("click", () => {
      close_functionality(section_body_container, "show_profile_page");
      close_functionality(back_icon, "show_profile_page");
    });
  });
});

// ===================================================
// follow btn element
const Follow_btn = document.querySelector(".follow_btn");

// follow function
Follow_btn.addEventListener("click", () => {
  if (Follow_btn.textContent === "Follow") {
    Follow_btn.textContent = "unFollow";
  } else {
    Follow_btn.textContent = "Follow";
  }
});

// ================================
// share btn element
const share_btn = document.querySelector(".share_profile_text");
const profile_link_container = document.querySelector(
  ".profile_link_container"
);

// share btn functionality
share_btn.addEventListener("click", () => {
  const Link = window.location.href;

  profile_link_container.textContent = Link;

  open_functionality(profile_link_container, "show_profile_link_container");

  setTimeout(() => {
    close_functionality(profile_link_container, "show_profile_link_container");
  }, 4000);

  profile_link_container.addEventListener("click", () => {
    navigator.clipboard.writeText(Link).then(() => {
      alert("Link copied to clipboard!");
    });
  });
});
