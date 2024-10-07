const cardContainer = document.querySelector(".cart-Container");
const cardContent = document.createElement("div");
cardContent.classList.add("card-Content");

function update() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = totalPrice(cart);
}

  cardContainer.textContent = "";
  fetch("../solodata.json")
    .then((response) => response.json())
    .then((product) => {
      const summaryDiv = document.createElement("div");
      summaryDiv.classList.add("summaryDiv");

      const summery = document.createElement("h1");
      summery.classList.add("summery");
      summery.textContent = "SUMMERY";
      summaryDiv.appendChild(summery);

      console.log(summaryDiv);
      cardContent.appendChild(summaryDiv);
      

      cart.forEach((product, index) => {
        const cardImg = document.createElement("img");
        cardImg.classList.add("cardImg");
        cardImg.src = `assets/png/${product.img}`;
        cardContent.appendChild(cardImg);

        const cardNamePriceContainer = document.createElement("div");
        cardNamePriceContainer.classList.add("cardNamePrice-Container");

        const cardName = document.createElement("p");
        cardName.classList.add("cardName");
        cardName.textContent = product.name;
        cardNamePriceContainer.appendChild(cardName);

        cardContent.appendChild(cardNamePriceContainer);

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("cardPrice");
        cardPrice.textContent = product.price;
        cardNamePriceContainer.appendChild(cardPrice);

        const cardQuantity = document.createElement("p");
        cardQuantity.classList.add("cardQuantity");
        cardQuantity.textContent = product.quantity;
        cardContent.appendChild(cardQuantity);

        const cardShippingToatal = document.createElement("div");
        cardShippingToatal.classList("cardShippingToatal");

        cardContainer.appendChild(cardContent);
      });

      const cardTotalContainer = document.createElement("div");
      cardContainer.classList.add("cardShippingToatal");

      const cardtotalPrice = document.createElement("div");
      cardtotalPrice.classList.add("cardtotalPrice");
      cardtotalPrice.textContent = `Total Price: $${total}`;
      cardTotalContainer.appendChild(cardtotalPrice);
      update()

      const cardshipping = document.createElement("div");
      cardshipping.classList.add("cardShipping");
      cardshipping.textContent = "$50";
      cardTotalContainer.appendChild(cardshipping);

      cardContent.appendChild(cardTotalContainer);
    });



function totalPrice(cart) {
    return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 0);
  }


update();
//         const itemElements = document.createElement("div");
//         itemElements.classList.add("item-Elements");
//         card.appendChild(itemElements);

//         console.log(itemElements)

//         const img = document.createElement("img");
//         img.classList.add("popup-img");
//         img.src = `assets/png/${product.img}`;
//         itemElements.appendChild(img);

//     const namePriceContainer = document.createElement("div")
//     namePriceContainer.classList.add("namePriceContainer")

//     const name = document.createElement("span");
//     name.classList.add("popup-name");
//     name.textContent = product.name;
//     namePriceContainer.appendChild(name)
//     // itemElements.appendChild(name);

//     const price = document.createElement("span");
//     price.classList.add("popup-price");
//     price.textContent = `$${product.price}`;
//     namePriceContainer.appendChild(price)
//     itemElements.appendChild(namePriceContainer);

//     const btnQuantityContainer = document.createElement("div")
//     btnQuantityContainer.classList.add("btnQuantityContainer")

//     const quantity = document.createElement("span");
//     quantity.classList.add("popup-quantity");
//     quantity.textContent = `${product.quantity}x`;
//     btnQuantityContainer.appendChild(quantity);

//     const btn = document.createElement("button");
//     btn.classList.add("remove-btn");
//     btn.textContent = "Remove";
//     btnQuantityContainer.appendChild(btn);

//     itemElements.appendChild(btnQuantityContainer)

//     btn.addEventListener("click", function () {
//         cart.splice(index, 1);
//         localStorage.setItem("cart", JSON.stringify(cart));

//         updateCartPopup();
//       });
//       card.appendChild(itemElements)
//       })

// }
