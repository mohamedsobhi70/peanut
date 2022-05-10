let userName = document.querySelector(".user-name");
let name = document.querySelector(".first-name");
let userPassword = document.querySelector(".user-password");
let userRePassword = document.querySelector(".re-user-password");
let signUpBtn = document.querySelector(".sign-up");

function signUp() {
  if (userPassword.value == userRePassword.value) {
    if (
      userName.value !== "" &&
      userPassword.value !== "" &&
      name.value !== ""
    ) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userPassword", userPassword.value);
      localStorage.setItem("name", name.value);
      window.location = "signin.html";
    }
  }
}
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signUp();
});
