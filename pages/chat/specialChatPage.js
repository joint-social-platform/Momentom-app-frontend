// get store item in local storage
const MessageBtn = localStorage.getItem("isMessageBtnClick");
let Id = "friendly_chat";

// ChatPage active user name chat
const active_user_name = document.querySelector(".active_user_name");
const profile_picture = document.querySelector(".profile_picture");
const chatting_page_message = document.querySelector(".chat_messages");
window.addEventListener("DOMContentLoaded", () => {
  if (MessageBtn == "true") {
    const network_name = localStorage.getItem("network_name");

    const network_image = localStorage.getItem("network_image");

    //   Update the name using value from local storage
    //   Set active username to be = network name
    active_user_name.textContent = network_name;

    //   Set profile picture to be = network image
    profile_picture.src = network_image;

    //   start new message
    chatting_page_message.innerHTML = "";

    //   set isMessageBtnClick back to false
    setTimeout(() => {
      localStorage.setItem("isMessageBtnClick", (isMessageBtnClick = false));
    }, 3000);

    //   ==============================================
    //   get active chat message container
    const active_chat_messages_container = document.querySelector(
      ".active_chat_messages"
    );

    //   get all active chat container children
    const active_chat_messages_children =
      active_chat_messages_container.children;

    //   get each child in the active chat message container

    const active_chat_message_child = Array.from(active_chat_messages_children);

    // // new messages chat only function
    active_chat_message_child.forEach((message_container) => {
      closeFunctionality(message_container, "currently_open_chat");
      closeFunctionality(
        message_container.children[1].children[0],
        "opened_chat"
      );
      closeFunctionality(
        message_container.children[1].children[1],
        "opened_chat"
      );
    });

    // creating new Element to be appended to the active chat message
    const new_recent_friends_chat_container = document.createElement("div");
    const new_friends_profile = document.createElement("img");
    const new_about_friend = document.createElement("article");
    const new_friend_name = document.createElement("h3");
    const new_recent_message = document.createElement("p");
    const new_recent_group_message = document.createElement("span");
    const new_camera_icon = document.createElement("img");

    // new elements styling
    new_recent_friends_chat_container.className =
      "recent_friends_chat_container currently_open_chat";
    new_friends_profile.className = "friends_profile ";
    new_about_friend.className = "about_friend";
    new_recent_message.className = "recent_message opened_chat";
    new_recent_group_message.className = "recent_group_message";
    new_camera_icon.className = "camera_icon";
    new_friend_name.className = "friend_name opened_chat";

    // new elements id
    new_recent_friends_chat_container.id = ID;

    new_recent_friends_chat_container.appendChild(new_friends_profile);
    new_recent_friends_chat_container.appendChild(new_about_friend);
    new_about_friend.appendChild(new_friend_name);
    new_about_friend.appendChild(new_recent_message);
    new_recent_friends_chat_container.appendChild(new_camera_icon);

    // new elements content
    new_friend_name.textContent = network_name;
    new_friends_profile.src = network_image;
    new_camera_icon.src = "../../src/images/camera_icon.png";

    //   prepend the new create elements to the active chat message
    active_chat_messages_container.prepend(new_recent_friends_chat_container);

    active_chat_messages_container.addEventListener("click", (e) => {
      const targetChat = e.target.closest(".recent_friends_chat_container");
      const targetCamera = e.target.classList.contains("camera_icon");
      if (targetChat) {
        openFunctionality(friends, "close_friends_list");
        openFunctionality(chat_container, "open_chat");

        // Remove all active style
        // create active chat container child
        const active_chat_container_child =
          active_chat_messages_container.children;

        // create an array for each active chat container child
        const active_chat_container_child_array = Array.from(
          active_chat_container_child
        );
        active_chat_container_child_array.map((active_chat) => {
          closeFunctionality(active_chat, "currently_open_chat");
          closeFunctionality(
            active_chat.children[1].children[0],
            "opened_chat"
          );
          closeFunctionality(
            active_chat.children[1].children[1],
            "opened_chat"
          );
        });

        // Add style to current click
        openFunctionality(targetChat, "currently_open_chat");
        openFunctionality(targetChat.children[1].children[0], "opened_chat");
        openFunctionality(targetChat.children[1].children[1], "opened_chat");

        // Update chat page name
        active_user_name.textContent =
          targetChat.children[1].children[0].textContent;
        profile_picture.src = targetChat.children[0].src;
      }
      if (targetCamera) {
        openFunctionality(body_container, "open_camera_container");
        userCamera(video_container);
      }
    });
  } else {
    console.log(false);
  }
});

const isCommunity_click = localStorage.getItem("community-btn");

window.addEventListener("DOMContentLoaded", () => {
  if (isCommunity_click == "true") {
    // Display a confirmation dialog
    let userResponse = confirm("Do you want to join Group Chat?");

    // Check the user's response
    if (userResponse) {
      // Perform actions for "OK"
      alert(`You've successfully joined Group`);
    } else {
      // Perform actions for "Cancel"
      window.location.href = "../communities/index.html";
      return;
    }

    // reset most of the global value to be different values
    // ===============================================================
    const chatting_page_message = document.querySelector("#chat_messages");
    const chatting_pages = document.querySelectorAll(".chatting_page ");
    const profile_picture = document.querySelectorAll(".profile_picture");

    const active_user_name = document.querySelectorAll(".active_user_name");

    // ================================================================
    // active chat message
    active_chat_messages.forEach((opened_chat) => {
      // console.log(opened_chat);
      const group = document.querySelector("#group");
      // remove class of active message from all active chat messages
      closeFunctionality(opened_chat, "active_message");

      // add active message class to only group active message
      openFunctionality(group, "active_message");

      chat_header_title_container.forEach((header) => {
        // remove class of active from all chat header
        closeFunctionality(header, "active_line");

        // add class of active to only group chat header
        openFunctionality(chat_header_title_container[1], "active_line");

        // remove active dot from private active room
        const private_active_dot = active_room_private.children[0];
        const public_active_dot = active_room_public.children[0];
        openFunctionality(public_active_dot, "opened_room");

        closeFunctionality(private_active_dot, "opened_room");
      });
    });

    const network_name = localStorage.getItem("comm-group-name");

    const network_image = localStorage.getItem("comm-group-img");

    //   Update the name using value from local storage
    //   Set active username to be = network name

    active_user_name[1].textContent = network_name;

    //   Set profile picture to be = network image
    profile_picture[1].src = network_image;

    // close previous open chatting page
    chatting_pages.forEach((chat_page) => {
      closeFunctionality(chat_page, "chatting_page_open");

      openFunctionality(chatting_pages[1], "chatting_page_open");
    });

    //   start new message
    chatting_page_message.innerHTML = "";

    //   set isMessageBtnClick back to false
    setTimeout(() => {
      localStorage.setItem("community-btn", (community_btn = "false"));
    }, 3000);

    //   ==============================================
    //   get active chat message container
    const active_chat_messages_container = document.querySelector("#group");

    //   get all active chat container children
    const active_chat_messages_children =
      active_chat_messages_container.children;

    //   get each child in the active chat message container

    const active_chat_message_child = Array.from(active_chat_messages_children);

    // // new messages chat only function
    active_chat_message_child.forEach((message_container) => {
      closeFunctionality(message_container, "currently_open_chat");
      closeFunctionality(
        message_container.children[1].children[0],
        "opened_chat"
      );
      closeFunctionality(
        message_container.children[1].children[1],
        "opened_chat"
      );
    });

    // creating new Element to be appended to the active chat message
    const new_recent_friends_chat_container = document.createElement("div");
    const new_friends_profile = document.createElement("img");
    const new_about_friend = document.createElement("article");
    const new_friend_name = document.createElement("h3");
    const new_recent_message = document.createElement("p");
    const new_recent_group_message = document.createElement("span");
    const new_camera_icon = document.createElement("img");

    // new elements styling
    new_recent_friends_chat_container.className =
      "recent_friends_chat_container currently_open_chat";
    new_friends_profile.className = "friends_profile ";
    new_about_friend.className = "about_friend";
    new_recent_message.className = "recent_message opened_chat";
    new_recent_group_message.className = "recent_group_message";
    new_camera_icon.className = "camera_icon";
    new_friend_name.className = "friend_name opened_chat";

    // new elements id
    new_recent_friends_chat_container.id = "group_chat";

    new_recent_friends_chat_container.appendChild(new_friends_profile);
    new_recent_friends_chat_container.appendChild(new_about_friend);
    new_about_friend.appendChild(new_friend_name);
    new_about_friend.appendChild(new_recent_message);
    new_recent_friends_chat_container.appendChild(new_camera_icon);

    // new elements content
    new_friend_name.textContent = network_name;
    new_friends_profile.src = network_image;
    new_camera_icon.src = "../../src/images/camera_icon.png";

    //   prepend the new create elements to the active chat message
    active_chat_messages_container.prepend(new_recent_friends_chat_container);

    active_chat_messages_container.addEventListener("click", (e) => {
      const targetChat = e.target.closest(".recent_friends_chat_container");
      const targetCamera = e.target.classList.contains("camera_icon");
      if (targetChat) {
        openFunctionality(friends, "close_friends_list");
        openFunctionality(chat_container, "open_chat");

        // Remove all active style
        // create active chat container child
        const active_chat_container_child =
          active_chat_messages_container.children;

        // create an array for each active chat container child
        const active_chat_container_child_array = Array.from(
          active_chat_container_child
        );
        active_chat_container_child_array.map((active_chat) => {
          closeFunctionality(active_chat, "currently_open_chat");
          closeFunctionality(
            active_chat.children[1].children[0],
            "opened_chat"
          );
          closeFunctionality(
            active_chat.children[1].children[1],
            "opened_chat"
          );
        });

        // Add style to current click
        openFunctionality(targetChat, "currently_open_chat");
        openFunctionality(targetChat.children[1].children[0], "opened_chat");
        openFunctionality(targetChat.children[1].children[1], "opened_chat");

        // Update chat page name
        active_user_name[1].textContent =
          targetChat.children[1].children[0].textContent;
        profile_picture[1].src = targetChat.children[0].src;
      }
      if (targetCamera) {
        openFunctionality(body_container, "open_camera_container");
        userCamera(video_container);
      }
    });
  } else {
    console.log(false);
  }
});

// =========================================================
// search input elements
const search_input = document.querySelector(".search_input");
search_input.addEventListener("input", (e) => {
  // get current open active chat container
  const openChat = document.querySelector(".active_message");

  const Names = openChat.querySelectorAll(".friend_name");

  const value = e.target.value;

  Names.forEach((name) => {
    const parentContainer = name.parentElement.parentElement;

    if (!value) {
      parentContainer.style.display = "flex";
    }

    if (name.textContent.includes(`${value}`)) {
      parentContainer.style.display = "flex";
    } else {
      parentContainer.style.display = "none";
    }
  });
});
