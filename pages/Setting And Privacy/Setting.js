// ========================================
// Functionalities
// open functionality
const open_functionality = (div, classes) => {
  div.classList.add(classes);
};
// close functionality
const close_functionality = (div, classes) => {
  div.classList.remove(classes);
};

let theme = "dark_mode";
// document onload get current mode
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("User_Name")) {
    user_name.textContent = localStorage.getItem("User_Name");
    profile_name.textContent = localStorage.getItem("User_Name");
    edit_profile_name.textContent = localStorage.getItem("User_Name");
  }

  // function for modes
  if (localStorage.getItem("mode")) {
    theme = localStorage.getItem("mode");
    document.body.className = localStorage.getItem("mode");
    return;
  }
  localStorage.setItem("mode", theme);
  document.body.className = localStorage.getItem("mode");
});

// ===============================================
// side bar elements container
const side_bar_container = document.querySelector(
  ".account_center_main_container"
);
const side_bar_click = document.querySelectorAll(".side_clickable_btn");
const getContents = document.querySelectorAll(".content");
const main_content_container = document.querySelector(
  ".main_content_container"
);
const Mobile_back_Setting_icon = document.querySelector(".fa-arrow-left");

// side bar functionality
side_bar_container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const currentClick = e.target;
  const getClicked = document.querySelector(`#${id}`);

  // profile details functionality
  if (id === "profile_details") {
    // onclick navigate to profile page
    window.location.href = "../profile/index.html";
  }

  // dark mode functionality
  if (id === "dark_mode") {
    if (theme === "dark_mode") {
      theme = "light_mode";
    } else {
      theme = "dark_mode";
    }
    localStorage.setItem("mode", theme);
    document.body.className = localStorage.getItem("mode");
  }

  // if clicked contains dataset-id then add this functions
  if (id) {
    // side bar click functionality

    side_bar_click.forEach((btn) => {
      // remove the class of active from all sidebar click btn
      close_functionality(btn, "active");
    });

    // add class of active to the current click
    open_functionality(currentClick, "active");
    setTimeout(() => {
      open_functionality(Mobile_back_Setting_icon, "show_display");
    }, 2000);

    // if click is null do nothing,if it has no matching id with the data-set

    if (getClicked) {
      // get content functionality

      getContents.forEach((content) => {
        // remove all class of show display from all content
        close_functionality(content, "show_display");
      });
      // mobile responsiveness functionality
      open_functionality(main_content_container, "show_main_content_container");
    } else {
      return;
    }

    // add show display to the current click get content
    open_functionality(getClicked, "show_display");
  }
});

// mobile back setting icon
Mobile_back_Setting_icon.addEventListener("click", () => {
  close_functionality(main_content_container, "show_main_content_container");
  close_functionality(Mobile_back_Setting_icon, "show_display");
});

// =========================================
// profile edit btn element
const ProfileEditBtn = document.querySelector(".edit_btn");
const ProfileCloseBtn = document.querySelector(".edit_cancel");
const ProfileModal = document.querySelector(".edit_profile_modal_container");

// profile edit btn functionality open modal
ProfileEditBtn.addEventListener("click", () => {
  open_functionality(ProfileModal, "show_display");
  close_functionality(Mobile_back_Setting_icon, "show_display");
});

// profile edit btn functionality close modal
ProfileCloseBtn.addEventListener("click", () => {
  close_functionality(ProfileModal, "show_display");
  open_functionality(Mobile_back_Setting_icon, "show_display");
});

// =========================================
// edit user element for profile
const edit_user = document.querySelectorAll(".edit_input_container");
const update_info = document.querySelector(".update_info");
const edit_profile_name = document.querySelector(".edit_profile_name");
const profile_name = document.querySelector(".profile_name");
const user_name = document.querySelector(".user_name");

// edit user element functionality
update_info.addEventListener("click", () => {
  edit_user.forEach((each_field) => {
    const inputField = each_field.querySelectorAll("input");

    inputField.forEach((value) => {
      if (value.id === "full_name") {
        if (value.value === "") {
          return;
        }
        localStorage.setItem("Full_Name", value.value);
        value.value = "";
      }
      if (value.id === "username") {
        if (value.value === "") {
          return;
        }
        localStorage.setItem("User_Name", value.value);
        user_name.textContent = localStorage.getItem("User_Name");
        profile_name.textContent = localStorage.getItem("User_Name");
        edit_profile_name.textContent = localStorage.getItem("User_Name");
        value.value = "";
      }
    });
  });
  close_functionality(ProfileModal, "show_display");
});

// ===========================================
// blocking edit btn element
const block_cancel = document.querySelector(".block_cancel");
const block_edit_btn = document.querySelectorAll(".block_edit_btn");
const block_modal_container = document.querySelector(".block_modal_container");

// blocking edit functionality open modal
block_edit_btn.forEach((edit_btn) => {
  edit_btn.addEventListener("click", (e) => {
    // get click parent
    const parent_container = e.target.parentElement;
    const title = parent_container.children[0].children[0];
    const text = parent_container.children[0].children[1];
    open_functionality(block_modal_container, "show_display");
    close_functionality(Mobile_back_Setting_icon, "show_display");

    // get block modal container title and update the contents
    const header = block_modal_container.querySelector(".block_modal_title");
    const sub_header = block_modal_container.querySelector(".block_modal_text");
    header.textContent = title.textContent;
    sub_header.textContent = text.textContent;
  });
});

// blocking edit functionality close modal
block_cancel.addEventListener("click", () => {
  close_functionality(block_modal_container, "show_display");
  open_functionality(Mobile_back_Setting_icon, "show_display");
});

// =========================================
// notification drop down btn element
const notification_drop_down = document.querySelector(".notification_content");
const toggle_div = document.querySelectorAll(".toggle_div");

// notification drop down functionality
notification_drop_down.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("comment_container") ||
    e.target.classList.contains("comments_title") ||
    e.target.classList.contains("comments_sub_method") ||
    e.target.classList.contains("comment_sub_div")
  ) {
    notification_drop_down.classList.toggle("add_height");
    notification_drop_down.classList.toggle("show_icon");
  }

  toggle_div.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("move_div");
    });
  });
});

// ============================================
// password element
const password_input_container = document.querySelectorAll(
  ".password_input_container"
);
const updatePasswordBtn = document.querySelector(".update_password_btn");

let new_password;
let re_type_password;
// password element functionality
updatePasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  password_input_container.forEach((each_input) => {
    const input = each_input.querySelector("input");

    if (input.id === "new_password") {
      new_password = input.value;
    }
    if (input.id === "re_type_password") {
      re_type_password = input.value;
    }
  });
  if (new_password !== re_type_password) {
    alert(`new password doesn't match re_type password`);
    return;
  }
  localStorage.setItem("password", new_password);
  window.location.href = "../../index.html";
});
