// -----------------------------------------------------------
// main content from db.js
// -----------------------------------------------------------

function renderDishes() {
  const categoriesWrapper = document.getElementById("categories-wrapper");
  const dishesWrapper = document.getElementById("dishes-wrapper");
  categoriesWrapper.innerHTML = "";
  dishesWrapper.innerHTML = "";

  for (let category in dishes) {
    let categoryData = dishes[category];
    let dishData = categoryData.items;

    categoriesWrapper.innerHTML += createCategory(category);
    dishesWrapper.innerHTML += createCategogryHeader(category, categoryData);

    dishData.forEach((dishItem) => {
      dishesWrapper.innerHTML += createDishSection(dishItem);
    });
  }
}

// -----------------------------------------------------------
// cart section
// -----------------------------------------------------------

// let cart = [
//   { name: "asd", basePrice: 3.5, price: 3.5, amount: 1 },
//   { name: "fds", basePrice: 5.5, price: 5.5, amount: 1 },
//   { name: "asdv", basePrice: 6.5, price: 6.5, amount: 1 },
// ];

let cart = [];

function renderCart() {
  const basketItems = document.getElementById("cart-items");
  const cartTotalWrapper = document.getElementById("cart-total-wrapper");
  const emptyCartPlaceholder = document.getElementById("empty-cart-placeholder");
  const subtotalPriceSpan = document.getElementById("subtotal");
  const shippingCostPriceSpan = document.getElementById("shipping").textContent;
  const totalPriceSpan = document.getElementById("total");

  basketItems.innerHTML = "";

  cart.forEach((cartItem, index) => {
    basketItems.innerHTML += createCartItem(cartItem, index);
  });

  const subTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subTotal + parseInt(shippingCostPriceSpan);

  if (cart.length > 0) {
    subtotalPriceSpan.textContent = `${subTotal.toFixed(2)} CHF`;
    totalPriceSpan.textContent = `${total.toFixed(2)} CHF`;
    cartTotalWrapper.classList.add("visible");
    emptyCartPlaceholder.classList.remove("visible");
  } else {
    cartTotalWrapper.classList.remove("visible");
    emptyCartPlaceholder.classList.add("visible");
  }

  updateMobileAmtCart();
}

function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    existingItem.amount += 1;
    existingItem.price = existingItem.basePrice * existingItem.amount;
  } else {
    cart.push({
      name: item.name,
      basePrice: item.basePrice,
      price: item.basePrice,
      amount: 1,
    });
  }

  renderCart();
}

function decreaseAmt(index) {
  cart[index].amount -= 1;
  updatePrice(index);

  if (cart[index].amount === 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function increaseAmt(index) {
  cart[index].amount += 1;
  updatePrice(index);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function updatePrice(index) {
  cart[index].price = cart[index].basePrice * cart[index].amount;
}

// -----------------------------------------------------------
// order confirmation
// -----------------------------------------------------------

document.getElementById("order-btn").addEventListener("click", successMessage);

function successMessage() {
  const cartContent = document.getElementById("cart-order-info");
  const successMessage = document.getElementById("success-message");
  cartContent.style.display = "none";
  successMessage.style.display = "flex";
}

// -----------------------------------------------------------
// mobile cart button
// -----------------------------------------------------------

function updateMobileAmtCart() {
  const cartCountElement = document.getElementById("mobile-amount-cart");
  // cartCountElement.textContent = cart.length;
  cartCountElement.textContent = cart.reduce((sum, item) => sum + item.amount, 0);
}

function toggleCart() {
  const outerCartWrapper = document.querySelector(".outer-cart-wrapper");

  outerCartWrapper.classList.add("show");
}

function closeCart() {
  const outerCartWrapper = document.querySelector(".outer-cart-wrapper");

  outerCartWrapper.classList.remove("show");
}

// Event Listeners
const cartBtn = document.getElementById("mobile-cart-btn");
const closeMobileBtn = document.querySelector(".mobile-close-btn");

cartBtn.addEventListener("click", toggleCart);
closeMobileBtn.addEventListener("click", closeCart);

// -----------------------------------------------------------
// function initializing
// -----------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // todo
});
