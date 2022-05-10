let userName = document.querySelector(".user");
let password = document.querySelector(".password");
let loginBtn = document.querySelector(".login-btn");
function login() {
  if (
    localStorage.getItem("userName") &&
    localStorage.getItem("userPassword")
  ) {
    if (
      userName.value == localStorage.getItem("userName") &&
      password.value == localStorage.getItem("userPassword")
    ) {
      window.location = "index.html";
    } else {
      userName.value = "";
      userName.setAttribute("placeholder", "username or password incorrect");
    }
  } else {
    userName.value = "";
    userName.setAttribute("placeholder", "username or password incorrect");
  }
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});
