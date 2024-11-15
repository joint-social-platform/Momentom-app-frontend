// ============================================================
// all open function

const openFunctionality = (div, classes) => {
  return div.classList.add(classes);
};

// ============================================================
// all close function
const closeFunctionality = (div, classes) => {
  return div.classList.remove(classes);
};

// ============================================================
// nav toggle elements used
const nav_bar_icon = document.querySelector(".nav_toggle");
const mobile_nav = document.querySelector(".navigation_icons");
const nav_cancel_icon = document.querySelector(".cancel_nav_toggle_icon");

// ===========================================================
// nav toggle functionality
nav_bar_icon.addEventListener("click", () => {
  openFunctionality(mobile_nav, "open_nav");
});
nav_cancel_icon.addEventListener("click", () => {
  closeFunctionality(mobile_nav, "open_nav");
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
    openFunctionality(friends, "close_friends_list");
    openFunctionality(chat_container, "open_chat");
  });
});

// ============================================================
// open see friends functionality
see_friends_list.addEventListener("click", () => {
  openFunctionality(chatting_page, "close_chatting_page");
  openFunctionality(group_chatting_page, "close_chatting_page");
  openFunctionality(active_friends_list, "open_active_friends_list");
});

// ========================================================
// go back element
const go_back = document.querySelectorAll(".back_icon");

// ===================================================
// go back functionality
go_back.forEach((each_back_icon) => {
  each_back_icon.addEventListener("click", () => {
    if (chatting_page.classList.contains("close_chatting_page")) {
      closeFunctionality(chatting_page, "close_chatting_page");
      closeFunctionality(group_chatting_page, "close_chatting_page");
      closeFunctionality(active_friends_list, "open_active_friends_list");
    } else {
      friends.classList.remove("close_friends_list");
      closeFunctionality(chat_container, "open_chat");
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
      closeFunctionality(each_title, "active_line");

      openFunctionality(parent_container, "active_line");
    });

    // active chat message functionality
    active_chat_messages.forEach((active_chat) => {
      const id = active_chat.dataset.id;
      const element = document.getElementById(Id);

      closeFunctionality(active_chat, "active_message");
      if (Id == id) {
        openFunctionality(element, "active_message");
      }
    });
  }
});

// // ============================================================
// // public room
const private_chat = document.querySelector("#private");
const public_group_chat = document.querySelector("#public");
const public_room = document.querySelectorAll("#group_chat");
const active_room_public = document.querySelector("#active_room_public");
const active_room_private = document.querySelector("#active_room_private");
const current_chat_details = document.querySelector(".current_chat_detail");
const current_chat_detail = document.querySelector("#current_chat_detail");
const typing_area = document.querySelectorAll(".typing_area");

// public room functionality
public_room.forEach((each_public_room) => {
  each_public_room.addEventListener("click", (e) => {
    const private_active_dot = active_room_private.children[0];
    const public_active_dot = active_room_public.children[0];
    openFunctionality(public_active_dot, "opened_room");

    closeFunctionality(private_active_dot, "opened_room");

    closeFunctionality(private_chat, "chatting_page_open");

    openFunctionality(public_group_chat, "chatting_page_open");

    // Dynamic get user name and profile
    const target = e.currentTarget;
    if (target) {
      const img = target.children[0].src;
      let user_chat_img = current_chat_detail.children[0];
      const name = target.children[1].children[0].textContent;
      let user_chat_name = current_chat_detail.children[1].children[0];
      user_chat_name.textContent = name;
      user_chat_img.src = img;

      // opened chat active

      public_room.forEach((active_room) => {
        const name = active_room.children[1].children[0];
        const message = active_room.children[1].children[1];
        closeFunctionality(active_room, "currently_open_chat");

        closeFunctionality(name, "opened_chat");

        closeFunctionality(message, "opened_chat");

        if (e.currentTarget) {
          openFunctionality(e.currentTarget, "currently_open_chat");

          openFunctionality(
            e.currentTarget.children[1].children[0],
            "opened_chat"
          );

          openFunctionality(
            e.currentTarget.children[1].children[1],
            "opened_chat"
          );
        }
      });
      // ========================================================
      // group chatting page see friendlist display none
      see_friends_list.style.display = "none";
    }
  });
});

// // ============================================================
// // private
const private_room = document.querySelectorAll("#friendly_chat");

// private functionality
private_room.forEach((each_private_room) => {
  each_private_room.addEventListener("click", (e) => {
    const private_active_dot = active_room_private.children[0];
    const public_active_dot = active_room_public.children[0];
    closeFunctionality(public_active_dot, "opened_room");

    openFunctionality(private_active_dot, "opened_room");

    openFunctionality(private_chat, "chatting_page_open");

    closeFunctionality(public_group_chat, "chatting_page_open");

    // Dynamic get user name and profile
    const target = e.currentTarget;
    if (target) {
      const img = target.children[0].src;
      let user_chat_img = current_chat_details.children[0];
      const name = target.children[1].children[0].textContent;
      let user_chat_name = current_chat_details.children[1].children[0];
      user_chat_name.textContent = name;
      user_chat_img.src = img;
    }

    // opened chat active

    private_room.forEach((active_room) => {
      const name = active_room.children[1].children[0];
      const message = active_room.children[1].children[1];
      closeFunctionality(active_room, "currently_open_chat");

      closeFunctionality(name, "opened_chat");

      closeFunctionality(message, "opened_chat");

      if (e.currentTarget) {
        openFunctionality(e.currentTarget, "currently_open_chat");

        openFunctionality(
          e.currentTarget.children[1].children[0],
          "opened_chat"
        );

        openFunctionality(
          e.currentTarget.children[1].children[1],
          "opened_chat"
        );
      }
    });

    // ========================================================
    // chatting page see friendlist display
    see_friends_list.style.display = "block";
  });
});

// ============================================================
// group current chat detail functionality
current_chat_detail.addEventListener("click", () => {
  openFunctionality(chatting_page, "close_chatting_page");

  openFunctionality(group_chatting_page, "close_chatting_page");

  openFunctionality(active_friends_list, "open_active_friends_list");
});

// ===========================================================
// send message
let global_index;
const send_message_icon = document.querySelectorAll(".send_arrow_icon");
const message_input = document.querySelectorAll("#type_message_input");
const chat_message_container = document.querySelectorAll(".chat_messages");
let input_value;

// message input
message_input.forEach((message_input, index) => {
  message_input.addEventListener("input", (e) => {
    input_value = e.target.value;
  });

  // send message functionality
  send_message_icon[index].addEventListener("click", () => {
    // remove emoji container
    closeFunctionality(emoji_container[index], "show_emoji");

    global_index = index;
    // send recording
    if (typing_area[index].classList.contains("show_recording")) {
      closeFunctionality(typing_area[index], "show_recording");
      stopRecording();
    }

    // if input is empty don't send message
    if (input_value) {
      const newMessage = document.createElement("h2");
      newMessage.className = "receiver_message";
      newMessage.textContent = input_value;

      chat_message_container[index].appendChild(newMessage);

      // style the div
      const style_div = document.createElement("div");
      style_div.className = "receiver_message_box_design";

      newMessage.appendChild(style_div);

      // group chat
      if (group_chatting_page.classList.contains("chatting_page_open")) {
        const senderDetails = document.createElement("div");
        senderDetails.className = "sender_details receiver_details";
        const senderName = document.createElement("h4");
        senderName.className = 'sender_name"';
        senderName.textContent = "you";
        const senderImg = document.createElement("img");
        senderImg.className = "sender_profile_picture";
        senderImg.src = "../../src/images/user_profile.png";

        newMessage.appendChild(senderDetails);
        senderDetails.appendChild(senderName);
        senderDetails.appendChild(senderImg);
      }

      // Clear the input field in the DOM and reset the variable
      message_input.value = "";
      input_value = "";
    }
  });
});

// ===========================================================
// camera
let stream;
const body_container = document.body;
const camera_icon = document.querySelectorAll(".camera_icon");
const close_camera = document.querySelector(".close_camera");
const video_container = document.querySelector("#camera_video");
const take_picture = document.querySelector(".take_picture");
const canvas = document.querySelector(".camera_canva");
const camera_container = document.querySelector(".camera_container");

// ===========================================================
// getting access to user media camera function
const userCamera = async (div) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });

    div.srcObject = stream;
    div.style.display = "block";
  } catch (error) {
    alert(
      "Camera access was denied or is not supported, or is was not granted permission by your brower please grant permission"
    );
  }
};

// ===========================================================
// open camera
camera_icon.forEach((cameraIcons) => {
  cameraIcons.addEventListener("click", () => {
    openFunctionality(body_container, "open_camera_container");
    userCamera(video_container);
  });
});

// ===========================================================
// take picture functionality
const Capture_Img = () => {
  // Draw the current video frame onto the canvas
  const context = canvas.getContext("2d");
  context.drawImage(video_container, 0, 0, canvas.width, canvas.height);

  // Convert the canvas image to a data URL
  const imageUrl = canvas.toDataURL("image/png");

  // sho snap picture
  const img = document.createElement("img");
  img.src = imageUrl;
  img.className = "current_img";

  // Create a download link for the image
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "captured_image.png"; // Set file name
  link.click(); // Trigger download

  camera_container.appendChild(img);
  camera_container.classList.add("open_camera_canva");
};

// ===========================================================
// take picture
take_picture.addEventListener("click", () => {
  Capture_Img();
});

// ===========================================================
// stop camera function
const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    closeFunctionality(camera_container, "open_camera_canva");
  }
};

// ===========================================================
// close camera
close_camera.addEventListener("click", () => {
  closeFunctionality(body_container, "open_camera_container");
  stopCamera();
});

// ===========================================================
// mic
const mic_icon = document.querySelectorAll(".mic_recoder_icon");
let user_recoder;
let record = [];
let audio_stream;

// mic functionality
const Mic = async () => {
  try {
    // getting access to user microphone
    audio_stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    user_recoder = new MediaRecorder(audio_stream);

    // start recording
    user_recoder.start();

    // Collect audio data as it records
    user_recoder.ondataavailable = (event) => {
      record.push(event.data);
    };

    user_recoder.onstop = () => {
      const audioRecorde = new Blob(record, { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioRecorde);

      // Create an audio element to play the recording
      const audioElement = document.createElement("audio");
      const audio_container = document.createElement("div");
      audioElement.src = audioUrl;
      audioElement.controls = true;
      audio_container.className = "receiver audio_player";

      // Append the audio container element to the chat container
      chat_message_container[global_index].appendChild(audio_container);
      audio_container.appendChild(audioElement);

      // Release the audio
      audio_stream.getTracks().forEach((track) => track.stop());

      // Clear audio chunks for future recordings
      record = [];
    };
  } catch (error) {
    alert("Microphone access denied or unavailable");
  }
};

mic_icon.forEach((mic_icon, index) => {
  mic_icon.addEventListener("click", () => {
    openFunctionality(typing_area[index], "show_recording");
    Mic();
  });
});

// stop recording
const stopRecording = () => {
  if (user_recoder && user_recoder.state === "recording") {
    user_recoder.stop();
  }
};

// ===========================================================
// File
const File_icon = document.querySelectorAll(".gallery_icon");
const user_file_container = document.querySelectorAll(
  ".gallery_icon_file_input"
);

// ===========================================================
// File upload functionality
user_file_container.forEach((user_file, index) => {
  user_file.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;

    const filetype = (type, classes) => {
      const newImg = document.createElement(type);
      newImg.className = classes;

      // Set controls for audio and video elements
      if (type === "audio" || type === "video") {
        newImg.controls = true;
      }

      try {
        const fileUrl = URL.createObjectURL(file);
        newImg.src = fileUrl;
      } catch (error) {
        console.log(error);
      }

      chat_message_container[index].appendChild(newImg);

      if (type === "audio") {
        const audio_container = document.createElement("div");
        audio_container.appendChild(newImg);
        audio_container.classList = 'receiver audio_player"';
        chat_message_container[index].appendChild(audio_container);
      }
    };

    if (file) {
      // images
      if (
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".png")
      ) {
        filetype("img", "receiver_message_image receiver");
      }

      // music
      else if (
        fileName.endsWith(".mp3") ||
        fileName.endsWith(".wav") ||
        fileName.endsWith(".aac") ||
        fileName.endsWith(".flac") ||
        fileName.endsWith(".ogg") ||
        fileName.endsWith(".m4a") ||
        fileName.endsWith(".aiff")
      ) {
        filetype("audio");
      }

      // video
      else if (fileName.endsWith(".mp4")) {
        filetype("video", "receiver receiver_message_image receiver");
      }
      console.log(file);
    }
  });
});

File_icon.forEach((file_icon, index) => {
  file_icon.addEventListener("click", () => {
    global_index = index;
    user_file_container[index].click();
  });
});

// ===========================================================
// Emoji Call
const Emoji_Api =
  "https://emoji-api.com/emojis?access_key=c958b31d58f1214ab8bda485df1d4d7d1e2ad8b8";
const emoji_container = document.querySelectorAll(".bubble-bottom");
const emoji_icon = document.querySelectorAll(".emoji_icon");

emoji_icon.forEach((emoji_icon, index) => {
  emoji_icon.addEventListener("click", () => {
    Emoji();
    openFunctionality(emoji_container[index], "show_emoji");
  });
});

const Emoji = async () => {
  try {
    const res = await fetch(Emoji_Api);
    const data = await res.json();

    // Emoji
    let displayMenu = data.map(({ character }) => {
      return `  <p class='Emoji'>${character && character}</p>`;
    });
    displayMenu = displayMenu.join("");
    emoji_container.forEach((container) => {
      container.innerHTML = displayMenu;
    });
  } catch (error) {
    console.log(error);
  }

  const Emoji = document.querySelectorAll(".Emoji");
  Emoji.forEach((emoji) => {
    emoji.addEventListener("click", () => {
      message_input.forEach((message) => {
        message.value += emoji.textContent;
        input_value += emoji.textContent;
      });
    });
  });
};

// ===========================================================
// detail icon
const details = document.querySelectorAll(".help_icon");
const close_detail = document.querySelectorAll(".close_detail");
const detail_container = document.querySelectorAll(".tooltip-bottom");

// open detail
details.forEach((detail, index) => {
  detail.addEventListener("click", () => {
    openFunctionality(detail_container[index], "show_detail");
  });
});

// open detail
close_detail.forEach((close, index) => {
  close.addEventListener("click", () => {
    closeFunctionality(detail_container[index], "show_detail");
  });
});

// ===========================================================
// call icon section
let timeinterval;
const hours = document.querySelector(".hr");
const seconds = document.querySelector(".secs");
const minutes = document.querySelector(".mins");
const cancel_call = document.querySelector(".cancel");
const start_call_btn = document.querySelector(".start");
const end_call_btn = document.querySelector(".end_call");
const start_video_call = document.querySelector(".video");
const call_icon = document.querySelectorAll(".call_icon");
const start_call_modal = document.querySelector(".start_call");
const video_call_container = document.querySelector(".video_call");
const video_call_icon = document.querySelectorAll(".video_call_icon");
const call_container = document.querySelector(".normal_call_container");

// ===========================================================
// open call modal
call_icon.forEach((call) => {
  call.addEventListener("click", () => {
    openFunctionality(start_call_modal, "open_call");
    openFunctionality(start_call_btn, "open_video_call");
    closeFunctionality(start_video_call, "open_video_call");
  });
});

// ===========================================================
// close call modal
cancel_call.addEventListener("click", () => {
  closeFunctionality(start_call_modal, "open_call");
  closeFunctionality(start_call_btn, "open_video_call");
});

// ===========================================================
// start call
start_call_btn.addEventListener("click", () => {
  callTime();
  getUserDetails();
  openFunctionality(call_container, "open_call");
  call_container.style.backgroundColor = "black";
  closeFunctionality(start_call_modal, "open_call");
});

// ===========================================================
// end call
end_call_btn.addEventListener("click", () => {
  clearTime();
  stopCamera();
  closeFunctionality(call_container, "open_call");
  closeFunctionality(start_call_modal, "open_call");
  closeFunctionality(start_call_btn, "open_video_call");
  closeFunctionality(video_call_container, "open_video_call");
});

// ===========================================================
// get user function
const getUserDetails = () => {
  const name = document.querySelector(".active_user_name").textContent;
  const img = document.querySelector(".profile_picture").src;
  let caller_name = document.querySelector(".caller_name");
  let caller_img = document.querySelector(".caller_profile");

  caller_name.textContent = name;
  caller_img.src = img;
};

// ===========================================================
// time function

const callTime = () => {
  let mins = 0;
  let secs = 0;
  let hrs = 0;
  timeinterval = setInterval(() => {
    secs += 1;
    if (secs > 60) {
      secs = 0;
      mins += 1;
    }
    if (mins > 60) {
      mins = 0;
      hrs += 1;
    }
    seconds.textContent = realTime(secs);
    minutes.textContent = realTime(mins);
    hours.textContent = realTime(hrs);
  }, 1000);
};

const clearTime = () => {
  clearInterval(timeinterval);
};

// 00:00:00
const realTime = (value) => {
  return value < 10 ? "0" + value : value;
};

// ===========================================================
// open video call modal
video_call_icon.forEach((video_call) => {
  video_call.addEventListener("click", () => {
    openFunctionality(start_call_modal, "open_call");
    openFunctionality(start_video_call, "open_video_call");
  });
});

// ===========================================================
// start video call
start_video_call.addEventListener("click", () => {
  callTime();
  getUserDetails();
  userCamera(video_call_container);
  openFunctionality(call_container, "open_call");
  call_container.style.backgroundColor = "transparent";
  openFunctionality(video_call_container, "open_video_call");
});
