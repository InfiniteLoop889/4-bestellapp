// -----------------------------------------------------------
// main content from db.js
// -----------------------------------------------------------

function renderDishes() {
  const categoriesWrapper = document.getElementById("categories-wrapper");
  const dishesWrapper = document.getElementById("dishes-wrapper");

  let categoriesHTML = "";
  let dishesHTML = "";

  for (let category in dishes) {
    let categoryData = dishes[category];
    let dishData = categoryData.items;

    categoriesHTML += createCategory(category);
    dishesHTML += createCategogryHeader(category, categoryData);

    dishData.forEach((dishItem) => {
      dishesHTML += createDishSection(dishItem);
    });
  }

  categoriesWrapper.innerHTML = categoriesHTML;
  dishesWrapper.innerHTML = dishesHTML;
}

// -----------------------------------------------------------
// cart section
// -----------------------------------------------------------

let cart = [];

function calculateSubTotal(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
  }
  return sum;
}

function calculateTotal(subTotal, shippingCost) {
  return subTotal + parseInt(shippingCost);
}

function showCartContent(cart) {
  const cartTotalWrapper = document.getElementById("cart-total-wrapper");
  const emptyCartPlaceholder = document.getElementById("empty-cart-placeholder");

  if (cart.length > 0) {
    cartTotalWrapper.classList.add("visible");
    emptyCartPlaceholder.classList.remove("visible");
  } else {
    cartTotalWrapper.classList.remove("visible");
    emptyCartPlaceholder.classList.add("visible");
  }
}

function updatePrices(subTotal, total) {
  const subtotalPriceSpan = document.getElementById("subtotal");
  const totalPriceSpan = document.getElementById("total");

  subtotalPriceSpan.textContent = subTotal.toFixed(2) + " CHF";
  totalPriceSpan.textContent = total.toFixed(2) + " CHF";
}

function renderCart() {
  const basketItems = document.getElementById("cart-items");
  const shippingCostPriceSpan = document.getElementById("shipping").textContent;

  basketItems.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    basketItems.innerHTML += createCartItem(cart[i], i);
  }

  const subTotal = calculateSubTotal(cart);
  const total = calculateTotal(subTotal, shippingCostPriceSpan);

  updatePrices(subTotal, total);
  showCartContent(cart);
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
  cart = [];
  renderCart();

  setTimeout(() => {
    successMessage.style.display = "none";
    cartContent.style.display = "block";
  }, 5000);
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
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const outerCartWrapper = document.querySelector(".outer-cart-wrapper");
  outerCartWrapper.classList.remove("show");
  document.body.style.overflow = "";
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
  renderDishes();
  renderCart();
});
