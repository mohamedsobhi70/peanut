
function checkUserName() {
    if (localStorage.getItem("userName")) {
      document.querySelector(".account-section >a").classList.add("d-none");
      document.querySelector(".account-section a.user-name-section").classList.remove("d-none");
      document.querySelector(".user-name").innerHTML =localStorage.getItem("name");
      
    }
  }
  checkUserName();