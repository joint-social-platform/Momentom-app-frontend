const googleSignInBtn = document.querySelector(".google-signIn");

let tokenClient;

window.onload = () => {
  // Initialize the token client
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id:
      "865312802964-9ue0ol0578nk9f5rh7d0aircdiombr52.apps.googleusercontent.com",
    scope: "email profile openid",
    callback: handleCredentialResponse,
  });

  googleSignInBtn.addEventListener("click", () => {
    tokenClient.requestAccessToken();
  });
};

function handleCredentialResponse(response) {
  console.log("Access Token:", response.access_token);

  fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${response.access_token}`,
    },
  })
    .then((res) => res.json())
    .then((userInfo) => {
      console.log("User Info:", userInfo);

      console.log(`Name: ${userInfo.name}`);
      console.log(`Email: ${userInfo.email}`);
      console.log(`Picture: ${userInfo.picture}`);
    })
    .catch((err) => {
      console.error("Error fetching user info:", err);
    });
}
