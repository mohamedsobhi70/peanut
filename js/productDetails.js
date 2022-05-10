let allProducts = [];
let page = document.querySelector("main .container");
// get data from the api
async function getApi() {
  let res = await fetch("./js/products.json");
  let data = await res.json();
  allProducts = data.soldProducts;
  let selectedProduct = allProducts.filter(
    (el) => el.id == localStorage.getItem("selectedProductID")
  );
  drawProductDetails(selectedProduct[0]);
  console.log(selectedProduct);
}
getApi();

function drawProductDetails(item) {
  page.innerHTML = `
    <div class="p-5 bg-white shadow-main border-20">
                <div class="row ">
                    <div class="col-md-6 mb-3">
                        <img src=${item.img} class="w-100 border border-gray border-20 mb-3" alt="">
                        <div class="row">
                            <div class="col">
                                <img src="images/07.jpg" class="w-100 border border-gray shadow-main border-20" alt="">
                            </div>
                            <div class="col">
                                <img src="images/08.jpg" class="w-100 border border-gray border-20" alt="">
                            </div>
                            <div class="col">
                                <img src="images/09.jpg" class="w-100 border border-gray border-20" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 border-20 d-flex flex-column justify-content-around p-4">
                           <div class="">
                           <h3 class="fs-22 fw-bold text-text-color">${item.productName}</h3>
                           <div class="d-flex my-3">
                            <i class="fa me-1 fa-lg text-warning fa-star"></i>
                            <i class="fa me-1 fa-lg text-warning fa-star"></i>
                            <i class="fa me-1 fa-lg text-warning fa-star"></i>
                            <i class="fa me-1 fa-lg text-warning fa-star"></i>
                            <i class="fa me-1 fa-lg fa-star text-gray-color"></i>
                            </div>
                           <h4 class="text-primary-color fs-18 fw-normal">AED ${item.price}</h4>
                           <button class="btn fs-18 rounded-pill bg-secondary-color text-white px-3 px-md-4  py-2">
                               Add To Cart
                           </button></div>
                            <p class="py-4">${item.description}</p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
    `;
}
