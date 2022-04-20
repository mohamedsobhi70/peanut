let productsinCart = localStorage.getItem("productsinCart")
  ? JSON.parse(localStorage.getItem("productsinCart"))
  : [];
// fuction to draw cart items 
  function drawCart() {
    if (
      localStorage.getItem("productsinCart") &&
      localStorage.getItem("productsinCart") !== []
    ) {
      let cart = JSON.parse(localStorage.getItem("productsinCart"));
      for (let i = 0; i < cart.length; i++) {
        document.querySelector(".cart").innerHTML += `
        <div class="item bg-white mb-3 p-4 rounded-15 position-relative">
        <div class="d-flex align-items-center">
            <div class="img-box d-inline-flex align-items-center justify-content-center">
                <img src=${cart[i].img} width="170px" alt="img${cart[i].id}">
            </div>
            <div class="item-info">
                <div class="item-name fw-600">
                ${cart[i].productName}
                </div>
                <div class="item-num d-flex align-items-center my-4">
                    <span
                        class="plus bg-acent rounded-circle d-inline-flex justify-content-center align-items-center"
                        role="button" style="width: 30px; height: 30px;" onClick ="increaseinCart(${cart[i].id})">+</span>
                    <span class="num mx-4 fs-18 ">${cart[i].qty}</span>
                    <span
                        class="minus bg-acent rounded-circle  d-inline-flex justify-content-center align-items-center"
                        role="button" style="width: 30px; height: 30px;"  onClick ="decreaseinCart(${cart[i].id})">-</span>
                </div>
                <div class="item-price">
                    <span class="text-primary-color fw-600 fs-24">AED ${cart[i].price * cart[i].qty}</span>
                </div>
            </div>
        </div>
        <div class="delete-item position-absolute text-error-color d-flex align-items-end"
            role="button" onClick ="removeFromCart(${cart[i].id})">
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_633_5580)">
                    <path
                        d="M12.9369 23.3478H5.06383C2.89376 23.3478 1.12207 21.5605 1.12207 19.3713V4.62866H2.24379V19.3819C2.24379 20.9471 3.5018 22.2162 5.05335 22.2162H12.9264C14.4779 22.2162 15.7359 20.9471 15.7359 19.3819V4.62866H16.8577V19.3819C16.8786 21.5711 15.1069 23.3478 12.9369 23.3478Z"
                        fill="#FF4F4F" />
                    <path d="M18 4.05756H0V5.18917H18V4.05756Z" fill="#FF4F4F" />
                    <path d="M6.75161 8.59459H5.62988V18.8108H6.75161V8.59459Z" fill="#FF4F4F" />
                    <path d="M12.3707 8.59459H11.249V18.8108H12.3707V8.59459Z" fill="#FF4F4F" />
                    <path
                        d="M14.0684 4.34311H12.9466V2.77789C12.9466 2.22795 12.4434 1.78377 11.8249 1.78377H6.18485C5.56633 1.78377 5.06313 2.22795 5.06313 2.77789V4.34311H3.94141V2.77789C3.94141 1.60398 4.94781 0.652161 6.18485 0.652161H11.8144C13.0515 0.652161 14.0684 1.60398 14.0684 2.77789V4.34311Z"
                        fill="#FF4F4F" />
                </g>
                <defs>
                    <clipPath id="clip0_633_5580">
                        <rect width="18" height="22.6957" fill="white"
                            transform="translate(0 0.652161)" />
                    </clipPath>
                </defs>
            </svg>
            <span class="ms-2 d-md-inline d-none">Remove</span>
        </div>
    </div>
     `;
      }
    } else {
      document.querySelector(
        ".cart"
      ).innerHTML = `<h6 class="text-center py-5 bg-white rounded-15 text-secondary-color">Your Cart Empty , Choose What You Want First</h6>`;
    }
  }
// function to remove item from cart 
function removeFromCart(id) {
    productsinCart = productsinCart.filter((product) => product.id !== id);
    localStorage.setItem("productsinCart", JSON.stringify(productsinCart));
    document.querySelector(".cart").innerHTML = ``;
    if (productsinCart.length == 0) {
      localStorage.clear();
    }
    drawCart();
    totalinCart();
    getCartNum();
  }

  //function to get prouduct in cart number
function getCartNum() {
  let num = 0;
  if (productsinCart || productsinCart != []) {
    productsinCart.forEach((el) => {
      num += el.qty;
    });
  }
  document.querySelector("header .cart-num").innerHTML = num;
  document.querySelector(".total-product-num").innerHTML = productsinCart.length;
}
  //function to get amount 
function totalinCart() {
    let total = 0;
    if (productsinCart || productsinCart != []) {
      productsinCart.forEach((el) => {
        total += el.qty * (el.price );
      });
    } else {
      total = 0;
    }
    document.querySelector(".total-cart").innerHTML = `AED ${total} `;
  }

// increase item number in cart
function increaseinCart(id) {
    productsinCart.filter((el) => {
      if (el.id === id) {
        el.qty++;
      }
    });
    localStorage.setItem("productsinCart", JSON.stringify(productsinCart));
    document.querySelector(".cart").innerHTML = "";
    drawCart();
    getCartNum();
    totalinCart();
  }
  // ************************************
  // decrease item number in cart
  function decreaseinCart(id) {
    productsinCart.filter((el) => {
      if (el.id === id && el.qty > 1) {
        el.qty--;
      } else if (el.qty === 1) {
        removeFromCart(id);
      }
    });
    localStorage.setItem("productsinCart", JSON.stringify(productsinCart));
    document.querySelector(".cart").innerHTML = "";
    drawCart();
    getCartNum();
    totalinCart();
  }

  drawCart();
  getCartNum();
  totalinCart();