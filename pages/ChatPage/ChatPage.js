// ============================================================
// nav toggle
const nav_bar_icon = document.querySelector(".nav_toggle");
const mobile_nav = document.querySelector(".navigation_icons");
const nav_cancel_icon = document.querySelector(".cancel_nav_toggle_icon");

// ===========================================================
// nav toggle functionality
nav_bar_icon.addEventListener("click", () => {
  mobile_nav.classList.add("open_nav");
});
nav_cancel_icon.addEventListener("click", () => {
  mobile_nav.classList.remove("open_nav");
});

// ===========================================================
// chat page
const friends = document.querySelector(".friends");
const recent_friends_chat = document.querySelectorAll(
  ".recent_friends_chat_container"
);
const chat_container = document.querySelector(".chat_container");
const chatting_page = document.querySelector(".chatting_page ");
const see_friends_list = document.querySelector(".see_active_friends");
const active_friends_list = document.querySelector(".active_friends_list");

// ============================================================
// open chatting page
recent_friends_chat.forEach((each_chat) => {
  each_chat.addEventListener("click", () => {
    friends.classList.add("close_friends_list");
    chat_container.classList.add("open_chat");
  });
});

// ============================================================
// open see friends
see_friends_list.addEventListener("click", () => {
  chatting_page.classList.add("close_chatting_page");
  active_friends_list.classList.add("open_active_friends_list");
});

// ========================================================
// go back
const go_back = document.querySelectorAll(".back_icon");

// ===================================================
// go back functionality
go_back.forEach((each_back_icon) => {
  each_back_icon.addEventListener("click", () => {
    if (chatting_page.classList.contains("close_chatting_page")) {
      chatting_page.classList.remove("close_chatting_page");
      active_friends_list.classList.remove("open_active_friends_list");
    } else {
      friends.classList.remove("close_friends_list");
      chat_container.classList.remove("open_chat");
    }
  });
});
