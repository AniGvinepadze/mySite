// const urlParams = new URLSearchParams(window.location.search);

// const productId = parseInt(urlParams.get("id"));

// fetch("./solodata.json")
//   .then((response) => response.json())
//   .then((product) => {
//     if (product) {
//       const soloName = document.getElementById("SoloProduct-Name");
//       soloName.textContent = product.name.type;

//       const soloDescription = document.getElementById(
//         "SoloProduct-Description"
//       );
//       soloDescription.textContent = product.soloDescription;

//       const soloPrice = document.getElementById("SoloContainer-Price");
//       soloPrice.textContent = product.soloPrice;

//       const solofeatures = document.getElementById("SoloProduct-Features");
//       solofeatures.textContent = product.features;
//     } else {
//     }
//   });

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const addToCartBtn = document.getElementById("AddToCart-Btn");
const decBtn = document.getElementById("minus-Btn");
const incBtn = document.getElementById("plus-Btn");
const qty = document.getElementById("qty");
qty.id = `quantity-${productId}`;
fetch("../solodata.json")
  .then((response) => response.json())
  .then((products) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      const soloMainImg = document.getElementById("mainImg");
      soloMainImg.src = `../assets/png/${product.img}`;

      const soloName = document.getElementById("SoloProduct-Name");
      soloName.textContent = product.name;

      const soloType = document.getElementById("SoloProduct-Type");
      soloType.textContent = product.type;

      const soloDescription = document.getElementById(
        "SoloProduct-Description"
      );
      soloDescription.textContent = product.description;

      const soloPrice = document.getElementById("SoloContainer-Price");
      soloPrice.textContent = `$${product.price}`;

      const firstImg = document.querySelector(".one");
      firstImg.src = product.additionalImages[0];

      // const seconfImg = document.querySelector(".two");
      // seconfImg.src = product.additionalImages[1];

      const secondimg = document.querySelector(".two");
      secondimg.src = product.additionalImages[1];

      const thirdImg = document.querySelector(".three");
      thirdImg.src = product.additionalImages[2];

      const soloFeatures = document.getElementById("SoloProduct-Features");
      soloFeatures.textContent = product.features;

      // add to cart

      addToCartBtn.addEventListener("click", () => {
        const quantity = parseInt(qty.value);
        addToCart({ ...product, quantity });
      });
    } else {
    }
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProductIndex = cart.findIndex((p) => p.id === product.id);

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPopup();
}

incBtn.addEventListener("click", () => {
  plusQuantity();
});
decBtn.addEventListener("click", () => {
  minusQuantity();
});
function plusQuantity() {
  qty.value++;
}

function minusQuantity() {
  if (qty.value > 1) {
    qty.value--;
  }
}

// let cartIcon = document.querySelector(".cart");

// cartIcon.addEventListener("click", function () {
//   const popup = document.querySelector(".popup");
//   popup.classList.toggle("show");
//   updateCartPopup();
// });

// fetch("solodata.json")
//   .then((response) => response.json())
//   .then((products) => {
//     const productContainer = document.getElementById("SoloProduct-Container");

//     const quantityControls = document.createElement("div");
//     quantityControls.className = "quantitycontrols";

//     const minusBtn = document.createElement("button");
//     minusBtn.className = "minusBtn";
//     minusBtn.textContent = "-";

//     minusBtn.addEventListener("click", function () {
//       minusQuantity(product.id);
//     });

//     quantityControls.appendChild(minusBtn);

//     const quantityInput = document.createElement("input");
//     quantityInput.type = "number";
//     quantityInput.id = `quantity-${product.id}`;
//     quantityInput.value = "1";
//     quantityInput.min = "1";
//     quantityControls.appendChild(quantityInput);

//     const plusBtn = document.createElement("button");
//     plusBtn.textContent = "+";

//     plusBtn.addEventListener("click", function () {
//       plusQuantity(products.id);

//       quantityControls.appendChild(plusBtn);
//       quantityControls.appendChild(minusBtn);

//       const btn = document.createElement("button");
//       btn.textContent = "Add to cart";
//       btn.addEventListener("click", function () {
//         const quantity = parseInt(
//           document.querySelector(`#quantity-${product.id}`).value
//         );
//         addCart({ ...product.quantity });
//       });
//       productContainer.appendChild(btn);
//     });
//   });

// function minusQuantity(productId) {
//   const quantityInput = document.querySelector(`#quantity-${productId}`);
//   quantityInput.value = parseInt(quantityInput.value) - 1;
// }
// function plusQuantity(productId) {
//   const quantityInput = document.querySelector(`#quantity-${productId}`);
//   quantityInput.value = parseInt(quantityInput.value) + 1;
// }

// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart") || []);

//   const existingProductIndex = cart.findIndex((p) => p.id === product.id);

//   if ((existingProductIndex) => 0) {
//     cart[existingProductIndex].quantity += product.quantity;
//   } else {
//     CacheStorage.push(product);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartPopup();
// }
