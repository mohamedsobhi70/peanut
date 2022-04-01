function itemNum(item) {
  let selectedItem = document.getElementById(item);
  let plus = selectedItem.querySelector(".item-num .plus");
  let minus = selectedItem.querySelector(".item-num .minus");
  let num = selectedItem.querySelector(".item-num .num");
  plus.onclick = function () {
    num.innerHTML = parseInt(num.innerHTML) + 1;
  };
  minus.onclick = function () {
    if (num.innerHTML > 1) {
      num.innerHTML = parseInt(num.innerHTML) - 1;
    }
  };
}

let select = document.querySelectorAll(".select-item");

select.forEach((el) => {
  el.addEventListener("click", function () {
    for (let i = 0; i < select.length; i++) {
      select[i].classList.remove("active");
    }

    el.classList.add("active");
  });
});


