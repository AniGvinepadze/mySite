let cartBtn = document.querySelector(".cart");
let closeBtn = document.querySelector(".close-Btn");
let plusBtn = document.getElementById("plus-Btn");
let minusBtn = document.getElementById("minus-Btn");
let addCartBtn = document.getElementById("AddToCart-Btn");
const popup = document.querySelector(".popup");
let card = document.getElementById("AddToCart-Container");
let productContainer = document.getElementById("SoloProduct-Container");
let overlay = document.querySelector(".overlay");
let productList = document.querySelector(".product_list");

cartBtn.addEventListener("click", function () {
  popup.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  popup.style.display = "none";
  overlay.style.display = "none";
});

function totalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 0);
}

function totalElement(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function updateCartPopup() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = totalPrice(cart);
  let elements = totalElement(cart);

  popup.textContent = "";

  cart.forEach((product, index) => {
    const itemElements = document.createElement("div");
    itemElements.classList.add("item-Elements");
    productList.appendChild(itemElements);

    const img = document.createElement("img");
    img.classList.add("popup-img");
    img.src = `assets/png/${product.img}`;
    itemElements.appendChild(img);

    const namePriceContainer = document.createElement("div")
    namePriceContainer.classList.add("namePriceContainer")

    const name = document.createElement("span");
    name.classList.add("popup-name");
    name.textContent = product.name;
    namePriceContainer.appendChild(name)
    // itemElements.appendChild(name);

    const price = document.createElement("span");
    price.classList.add("popup-price");
    price.textContent = `$${product.price}`;
    namePriceContainer.appendChild(price)
    itemElements.appendChild(namePriceContainer);

    const btnQuantityContainer = document.createElement("div")
    btnQuantityContainer.classList.add("btnQuantityContainer")
    
    const quantity = document.createElement("span");
    quantity.classList.add("popup-quantity");
    quantity.textContent = product.quantity;
    btnQuantityContainer.appendChild(quantity);

    const btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.textContent = "Remove";
    btnQuantityContainer.appendChild(btn);

    itemElements.appendChild(btnQuantityContainer)

    btn.addEventListener("click", function () {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartPopup();
    });

    popup.appendChild(itemElements);
  });

  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-Container");

  const cartQuantity = document.createElement("div");
  cartQuantity.classList.add("cartQuantity");
  cartQuantity.textContent = `CART (${elements})`;
  cartContainer.appendChild(cartQuantity);

  const removeAllBtn = document.createElement("button");
  removeAllBtn.classList.add("removeAll-Btn");
  removeAllBtn.textContent = "Remove All";
  cartContainer.appendChild(removeAllBtn);

  removeAllBtn.addEventListener("click", function () {
    localStorage.removeItem("cart");
    updateCartPopup();
  });

  popup.appendChild(cartContainer);

  const totalContainer = document.createElement("div")
  totalContainer.classList.add("totalContainer")

  const totalItemsElement = document.createElement("div");
  totalItemsElement.classList.add("totalItemsElements");
  totalItemsElement.textContent = `Total Items: ${elements}`;
  totalContainer.appendChild(totalItemsElement);

  const totalPriceElement = document.createElement("div");
  totalPriceElement.classList.add("totalPriceElements");
  totalPriceElement.textContent = `Total Price: $${total}`;
  totalContainer.appendChild(totalPriceElement);
  // popup.appendChild(totalItemsElement);
  popup.appendChild(totalContainer)

  const chekout = document.createElement("button");
  chekout.classList.add("chekout");
  chekout.textContent = "CHECKOUT";

  chekout.addEventListener("click", function () {
    window.location.href = "checkout.html";
    console.log("test");
  });

  popup.appendChild(chekout);
}
updateCartPopup();
