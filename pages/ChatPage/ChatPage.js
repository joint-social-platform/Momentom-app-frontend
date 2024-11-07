// ============================================================
// nav toggle elements used
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
// chat page element
const friends = document.querySelector(".friends");
const recent_friends_chat = document.querySelectorAll(
  ".recent_friends_chat_container"
);
const chatting_page = document.querySelector(".chatting_page ");
const chat_container = document.querySelector(".chat_container");
const see_friends_list = document.querySelector(".see_active_friends");
const group_chatting_page = document.querySelector(".group_chatting-page");
const active_friends_list = document.querySelector(".active_friends_list");

// ============================================================
// open chatting page functionality
recent_friends_chat.forEach((each_chat) => {
  each_chat.addEventListener("click", () => {
    friends.classList.add("close_friends_list");
    chat_container.classList.add("open_chat");
  });
});

// ============================================================
// open see friends functionality
see_friends_list.addEventListener("click", () => {
  chatting_page.classList.add("close_chatting_page");
  group_chatting_page.classList.add("close_chatting_page");
  active_friends_list.classList.add("open_active_friends_list");
});

// ========================================================
// go back element
const go_back = document.querySelectorAll(".back_icon");

// ===================================================
// go back functionality
go_back.forEach((each_back_icon) => {
  each_back_icon.addEventListener("click", () => {
    if (chatting_page.classList.contains("close_chatting_page")) {
      chatting_page.classList.remove("close_chatting_page");
      group_chatting_page.classList.remove("close_chatting_page");
      active_friends_list.classList.remove("open_active_friends_list");
    } else {
      friends.classList.remove("close_friends_list");
      chat_container.classList.remove("open_chat");
    }
  });
});

// ============================================================
// chat message elements used
const chat_header_title_container = document.querySelectorAll(".line");
const active_chat_messages = document.querySelectorAll(".active_chat_messages");
const chat_header_container = document.querySelector(".chat_header_container");

// ============================================================
// chat message functionality

chat_header_container.addEventListener("click", (e) => {
  const parent_container = e.target.parentElement;
  const Id = e.target.dataset.id;

  if (e.target.classList.contains("chat_header_title")) {
    // chat header functionality
    chat_header_title_container.forEach((each_title) => {
      each_title.classList.remove("active_line");
      parent_container.classList.add("active_line");
    });
  }
  // active chat message functionality
  active_chat_messages.forEach((active_chat) => {
    const id = active_chat.dataset.id;
    const element = document.getElementById(Id);
    active_chat.classList.remove("active_message");
    if (Id == id) {
      element.classList.add("active_message");
    }
  });
});

// // ============================================================
// // private and public room functionality
// const rooms = document.querySelectorAll(".room");
// const room_kind = document.querySelector(".room_kinds");
// const chatting_pages = document.querySelectorAll(".chatting_page");

// // ============================================================
// // private and public room functionality
// room_kind.addEventListener("click", (e) => {
//   const Id = e.target.dataset.id;

//   if (e.target.classList.contains("room")) {
//     // remove opened css from all rooms
//     rooms.forEach((each_room) => {
//       each_room.children[0].classList.remove("opened_room");
//       e.target.children[0].classList.add("opened_room");
//     });

//     // different chatting page
//     chatting_pages.forEach((each_page) => {
//       const id = each_page.dataset.id;
//       const element = document.getElementById(Id);
//       each_page.classList.remove("chatting_page_open");
//       if (id == Id) {
//         element.classList.add("chatting_page_open");
//       }
//     });
//   }
// });

// // ============================================================
// // public room
const private_chat = document.querySelector("#private");
const public_group_chat = document.querySelector("#public");
const public_room = document.querySelectorAll("#group_chat");
const active_room_public = document.querySelector("#active_room_public");
const active_room_private = document.querySelector("#active_room_private");

// public room functionality
public_room.forEach((each_public_room) => {
  each_public_room.addEventListener("click", () => {
    const private_active_dot = active_room_private.children[0];
    const public_active_dot = active_room_public.children[0];
    public_active_dot.classList.add("opened_room");
    private_active_dot.classList.remove("opened_room");
    private_chat.classList.remove("chatting_page_open");
    public_group_chat.classList.add("chatting_page_open");
  });
});

// // ============================================================
// // private
const private_room = document.querySelectorAll("#friendly_chat");

// private functionality
private_room.forEach((each_private_room) => {
  each_private_room.addEventListener("click", () => {
    const private_active_dot = active_room_private.children[0];
    const public_active_dot = active_room_public.children[0];
    public_active_dot.classList.remove("opened_room");
    private_active_dot.classList.add("opened_room");
    private_chat.classList.add("chatting_page_open");
    public_group_chat.classList.remove("chatting_page_open");
  });
});
