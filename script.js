// ---------------------- main content from db.js ----------------------

function renderDishes() {
  const dishesWrapper = document.getElementById("dishes-wrapper");
  dishesWrapper.innerHTML = "";

  for (let dish in dishes) {
    let dishData = dishes[dish];

    dishData.forEach((dishItem) => {
      dishesWrapper.innerHTML += createDishSection(dishItem);
    });
  }
}

// ---------------------- cart section ----------------------

let cart = [{ name: "asd", price: 3.5 }];

function renderCart() {
  if (cart.length === 0) return;

  const basketItems = document.getElementById("cart-items");
  basketItems.innerHTML = "";

  cart.forEach((cartItem) => {
    basketItems.innerHTML += createCartItem(cartItem);
  });
}

function addToCart(item) {
  cart.push(item);
  renderCart();
}

// cart-items top calcualtion for correct sticky behaviour

function adjustCartItemsMargin() {
  const cartHeader = document.querySelector(".cart-header");
  const cartItems = document.getElementById("cart-items");
  const headerHeight = cartHeader.offsetHeight;
  cartItems.style.top = `${headerHeight}px`;
}

adjustCartItemsMargin();
window.addEventListener("resize", adjustCartItemsMargin);
