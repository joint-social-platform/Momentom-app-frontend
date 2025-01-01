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

  // if about user is update then get the new details
  if (localStorage.getItem("about_user")) {
    about_user.textContent = localStorage.getItem("about_user");
  }
});

// =========================================
// Mobile nav toggle
const open_nav_btn = document.querySelector(".fa-bars");
const close_nav_btn = document.querySelector(".fa-x");
const navigation_link_container = document.querySelector(
  ".navigation_link_container"
);

// ====================================
// open side bar toggle
const group_chat_btn = document.querySelectorAll("#group_chat_btn");
const back_icon = document.querySelector(".back_icon");
const network_container = document.querySelector(".network_container");

// ==============================
// open nav
open_nav_btn.addEventListener("click", () => {
  open_functionality(navigation_link_container, "open_nav");
});

// ==============================
// close nav
close_nav_btn.addEventListener("click", () => {
  close_functionality(navigation_link_container, "open_nav");
});

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
      window.location.reload();
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
// ===============================================
// post element
const post_btn = document.querySelector(".post");
const post_modal = document.querySelector(".post_modal");
const close_post_modal = document.querySelector(".close_post_modal");

// post functionality open modal
post_btn.addEventListener("click", () => {
  open_functionality(post_modal, "display_flex");
});

// post functionality close modal
close_post_modal.addEventListener("click", () => {
  close_functionality(post_modal, "display_flex");
});

// ======================================================
//  award and my work elements
const sub_nav_link = document.querySelectorAll(".about_pages");
const all_active_dot = document.querySelectorAll(".about_opened_page");

//  award and my work functionality
sub_nav_link.forEach((links_btn) => {
  links_btn.addEventListener("click", (e) => {
    const current_click = e.currentTarget;
    const href_id = links_btn.getAttribute("href");
    const target_element = document.querySelector(`${href_id}`);

    if (href_id) {
      open_functionality(target_element, "blue");

      // remove border after 4secs
      setTimeout(() => {
        close_functionality(target_element, "blue");
      }, 1000);
    }

    // get all active dot and remove active class
    all_active_dot.forEach((dot) => {
      close_functionality(dot, "active_about_page");
    });

    // get active dot
    const active_dot = current_click.querySelector(".about_opened_page");
    open_functionality(active_dot, "active_about_page");
  });
});

// ==============================================================
// About user edit element
const edit_about_btn = document.querySelector(".edit_about_icon");
const about_user = document.querySelector(".about_user_text");
const modal_title = document.querySelector(".constant_modal_title");
const close_modal = document.querySelector(".close_modal_container");
const modal_container = document.querySelector(".constant_modal_container");
const modal_input = document.querySelector(".constant_edit_textarea");
const modal_edit_btn = document.querySelector(".constant_modal_edit");

// About user edit functionality opens the modal
edit_about_btn.addEventListener("click", () => {
  const currentDetails = about_user.textContent.trim();

  // set modal title to be about user update
  modal_title.textContent = "About user update";

  // remove textarea
  modal_input.style.display = "flex";

  // Normalize the text (remove excessive line breaks or spaces)
  const normalizedDetails = currentDetails.replace(/\s+/g, " ");

  modal_input.value = normalizedDetails;

  open_functionality(modal_container, "display_flex");

  // about functionality that updates the modal
  modal_edit_btn.addEventListener("click", () => {
    // get the value from the textarea and update it to the about text
    about_user.textContent = modal_input.value;

    // save to local storage
    localStorage.setItem("about_user", modal_input.value);

    // close modal
    close_functionality(modal_container, "display_flex");
  });
});

// close modal functionality
close_modal.addEventListener("click", () => {
  close_functionality(modal_container, "display_flex");

  const edit_input = document.querySelectorAll(".school_edit_input");
  if (edit_input) {
    edit_input.forEach((inputs) => {
      inputs.remove();
      close_functionality(modal_container, "display_flex");
    });
  }
});

// ==========================================
// education element
const education_btn = document.querySelector(".education_edit_icon");
const delete_icon = document.querySelectorAll(".fa-trash");
const school_edit = document.querySelectorAll(".school_edit_icon");
const university_container = document.querySelector(".university");
const constant_modal_input_container = document.querySelector(
  ".constant_modal_input_container"
);

// education functionality
education_btn.addEventListener("click", () => {
  delete_icon.forEach((icon) => {
    open_functionality(icon, "display_flex");

    // =========================================
    // remove click
    icon.addEventListener("click", (e) => {
      e.currentTarget.parentElement.remove();
      delete_icon.forEach((remove_icon) => {
        // remove delete icon
        close_functionality(remove_icon, "display_flex");

        // add edit icon
        school_edit.forEach((edit_school) => {
          close_functionality(edit_school, "display_flex");
        });
      });

      if (university_container.children.length < 1) {
        const error_text = document.createElement("p");
        error_text.textContent =
          "no detail on your education , please tell us more about your education status";
        error_text.className = "error_message";
        university_container.append(error_text);
      }
    });
  });

  // delete added school
  university_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
      e.target.parentElement.remove();
    }
  });

  // remove school edit icon
  school_edit.forEach((edit_school) => {
    open_functionality(edit_school, "display_flex");
  });

  // add school functionality
  // update name
  modal_title.textContent = "Add education details";

  // change previous name
  modal_edit_btn.textContent = "Add School";

  // display modal edit textarea none
  modal_input.style.display = "none";

  // create edit inputs
  const uni_year = document.createElement("input");
  const uni_course = document.createElement("input");
  const uni_name = document.createElement("input");

  // style the created input
  uni_course.className = "school_edit_input";
  uni_name.className = "school_edit_input";
  uni_year.className = "school_edit_input";

  // input the text from the display
  uni_name.placeholder = "Input university name";
  uni_course.placeholder = "Input course studied";
  uni_year.placeholder = "Input date";

  // create school element as it is in the html
  const school_container = document.createElement("div");
  const school_img = document.createElement("div");
  const school_names = document.createElement("h3");
  const icon = document.createElement("h2");
  const user_course = document.createElement("div");
  const course = document.createElement("h4");
  const date = document.createElement("p");
  const deleteIcon = document.createElement("i");
  const editSchool = document.createElement("i");

  // style school elements
  school_container.className = "school-container";
  school_img.classList = "school_profile_picture js_style";
  school_names.className = "school_name";
  icon.className = "greater_than_icon";
  user_course.className = "user_course";
  course.className = "course";
  editSchool.classList = "fa-solid fa-pencil school_edit_icon";
  date.className = "date";
  deleteIcon.classList = "fa-solid fa-trash display_flex";

  // append all school elements to the container
  school_container.append(school_img);
  school_container.append(school_names);
  school_container.append(icon);
  school_container.append(user_course);
  user_course.append(course);
  user_course.append(date);
  school_container.append(deleteIcon);
  school_container.append(editSchool);

  open_functionality(modal_container, "display_flex");

  // add user education to profile page
  modal_edit_btn.addEventListener("click", () => {
    // setting their input values
    school_names.textContent = uni_name.value;
    icon.textContent = ">";
    course.textContent = uni_course.value;
    date.textContent = uni_year.value;
    // deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // editSchool.innerHTML =
    //   '<i class="fa-solid fa-pencil school_edit_icon"></i>';

    // style image
    school_img.textContent = uni_name.value.slice(0, 2);

    if (!uni_name.value) {
      alert(`please you can't add an empty school name`);
      return;
    }

    if (!uni_course.value) {
      alert(`please you can't add an empty course to yor education profile`);
      return;
    }
    // append school container to the main html document
    university_container.append(school_container);

    // remove all input
    const edit_input = document.querySelectorAll(".school_edit_input");
    edit_input.forEach((inputs) => {
      inputs.remove();
      close_functionality(modal_container, "display_flex");
    });
  });

  // prepend them to constant modal
  constant_modal_input_container.prepend(uni_year);
  constant_modal_input_container.prepend(uni_course);
  constant_modal_input_container.prepend(uni_name);
});

university_container.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("school_edit_icon")) {
    console.log("click");

    // set modal title to  education update
    modal_title.textContent = "education update";

    // display modal edit textarea none
    modal_input.style.display = "none";

    // get the current school container
    const parent = e.target.parentElement;

    // get current details
    const school_name = parent.querySelector(".school_name");
    const course = parent.querySelector(".course");
    const date = parent.querySelector(".date");

    // create edit inputs
    const uni_year = document.createElement("input");
    const uni_course = document.createElement("input");
    const uni_name = document.createElement("input");

    // style the created input
    uni_course.className = "school_edit_input";
    uni_name.className = "school_edit_input";
    uni_year.className = "school_edit_input";

    // input the text from the display
    uni_name.value = school_name.textContent.trim();
    uni_course.value = course.textContent.trim();
    uni_year.value = date.textContent.trim();

    // open modal
    open_functionality(modal_container, "display_flex");

    // update user edit to profile page
    modal_edit_btn.addEventListener("click", () => {
      school_name.textContent = uni_name.value;
      course.textContent = uni_course.value;
      date.textContent = uni_year.value;

      // remove all input
      const edit_input = document.querySelectorAll(".school_edit_input");
      edit_input.forEach((inputs) => {
        inputs.remove();
        close_functionality(modal_container, "display_flex");
      });
    });

    // prepend them to constant modal
    constant_modal_input_container.prepend(uni_year);
    constant_modal_input_container.prepend(uni_course);
    constant_modal_input_container.prepend(uni_name);
  }
});

// edit school functionality
// school_edit.forEach((edit_school) => {
//   edit_school.addEventListener("click", (e) => {

//   });
// });

// =============================================
// community elements
const community = document.querySelector(".communities");
const show_more_btn = document.querySelector(".show_more");

show_more_btn.addEventListener("click", () => {
  if (show_more_btn.textContent === "...show less") {
    community.style.overflow = "hidden";
  } else {
    community.style.overflow = "scroll";
    show_more_btn.style.display = "none";
  }
});
