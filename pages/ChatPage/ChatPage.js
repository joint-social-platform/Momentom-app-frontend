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

    // active chat message functionality
    active_chat_messages.forEach((active_chat) => {
      const id = active_chat.dataset.id;
      const element = document.getElementById(Id);
      active_chat.classList.remove("active_message");
      if (Id == id) {
        element.classList.add("active_message");
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
    public_active_dot.classList.add("opened_room");
    private_active_dot.classList.remove("opened_room");
    private_chat.classList.remove("chatting_page_open");
    public_group_chat.classList.add("chatting_page_open");

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
        const name = active_room.children[1].children[0].classList;
        const message = active_room.children[1].children[1].classList;
        active_room.classList.remove("currently_open_chat");
        name.remove("opened_chat");
        message.remove("opened_chat");

        if (e.currentTarget) {
          e.currentTarget.classList.add("currently_open_chat");
          e.currentTarget.children[1].children[0].classList.add("opened_chat");
          e.currentTarget.children[1].children[1].classList.add("opened_chat");
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
    public_active_dot.classList.remove("opened_room");
    private_active_dot.classList.add("opened_room");
    private_chat.classList.add("chatting_page_open");
    public_group_chat.classList.remove("chatting_page_open");

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
      const name = active_room.children[1].children[0].classList;
      const message = active_room.children[1].children[1].classList;
      active_room.classList.remove("currently_open_chat");
      name.remove("opened_chat");
      message.remove("opened_chat");

      if (e.currentTarget) {
        e.currentTarget.classList.add("currently_open_chat");
        e.currentTarget.children[1].children[0].classList.add("opened_chat");
        e.currentTarget.children[1].children[1].classList.add("opened_chat");
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
  chatting_page.classList.add("close_chatting_page");
  group_chatting_page.classList.add("close_chatting_page");
  active_friends_list.classList.add("open_active_friends_list");
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
    global_index = index;
    // send recording
    if (typing_area[index].classList.contains("show_recording")) {
      typing_area[index].classList.remove("show_recording");
      stopRecording();
    }

    // if input is empty don't send message
    if (input_value.trim() !== "") {
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
const userCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video_container.srcObject = stream;
    video_container.style.display = "block";
    console.log(stream, video_container);
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
    body_container.classList.add("open_camera_container");
    userCamera();
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
  console.log(img);

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
  console.log("snap");
  Capture_Img();
});

// ===========================================================
// stop camera function
const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    camera_container.classList.remove("open_camera_canva");
  }
};

// ===========================================================
// close camera
close_camera.addEventListener("click", () => {
  body_container.classList.remove("open_camera_container");
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
    typing_area[index].classList.add("show_recording");
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
      console.log(newImg);

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
