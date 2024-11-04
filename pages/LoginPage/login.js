const formLogin = document.querySelector(".form-login");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "../ChatPage/chat.html";
});
