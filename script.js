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

let cart = [
  { name: "asd", price: 3.5, amount: 4 },
  { name: "fds", price: 5.5, amount: 2 },
];

function renderCart() {
  const basketItems = document.getElementById("cart-items");
  basketItems.innerHTML = "";

  cart.forEach((cartItem, index) => {
    basketItems.innerHTML += createCartItem(cartItem, index);
  });
}

function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    ++existingItem.amount;
  } else {
    cart.push({ ...item, amount: 1 });
  }

  renderCart();
}

function decreaseAmt(index) {
  --cart[index].amount;

  if (cart[index].amount === 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function increaseAmt(index) {
  ++cart[index].amount;
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// cart-items top calcualtion for correct sticky behaviour

function adjustCartItemsTop() {
  const cartHeader = document.querySelector(".cart-header");
  const cartItems = document.getElementById("cart-items");
  const headerHeight = cartHeader.offsetHeight;
  cartItems.style.top = `${headerHeight}px`;
}

adjustCartItemsTop();
window.addEventListener("resize", adjustCartItemsTop);
