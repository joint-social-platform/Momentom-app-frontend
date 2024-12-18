// =========================================
// message btn
const messageBtn = document.querySelectorAll(".message_user_container");
let isMessageBtnClick = false;
let timer;
messageBtn.forEach((message) => {
  message.addEventListener("click", (e) => {
    //   ===========================================
    const parentContainer = e.target.parentElement.parentElement;

    //   get click user network details
    const container = parentContainer.querySelector(".user_network_details");

    //   get user network name
    const network_name = container.querySelector(".user_network_name");

    //   get user network image
    const network_image = container.querySelector(".user_network_profile");

    // set up local storage and store the network name there
    localStorage.setItem("network_name", network_name.textContent);

    // set up local storage and store the network image there
    localStorage.setItem("network_image", network_image.src);

    // set up local storage and store isMessageBtnClick true
    localStorage.setItem("isMessageBtnClick", (isMessageBtnClick = true));

    // Clear any previous timeout to reset the click flag
    clearTimeout(timer);

    // Set a new timeout to reset the click flag after 3 seconds
    timer = setTimeout(() => {
      localStorage.setItem("isMessageBtnClick", (isMessageBtnClick = false));
    }, 3000);

    // navigate to the chat page
    window.location.href = "../chat/index.html";
  });
});
