// -----------------------------------------------------------
// main content from db.js
// -----------------------------------------------------------

function renderDishes() {
  const catergoriesWrapper = document.getElementById("catergories-wrapper");
  const dishesWrapper = document.getElementById("dishes-wrapper");
  catergoriesWrapper.innerHTML = "";
  dishesWrapper.innerHTML = "";

  for (let dish in dishes) {
    catergoriesWrapper.innerHTML += createCategory(dish);
    console.log(catergoriesWrapper);

    let dishData = dishes[dish];

    dishData.forEach((dishItem) => {
      dishesWrapper.innerHTML += createDishSection(dishItem);
    });
  }
}

// -----------------------------------------------------------
// cart section
// -----------------------------------------------------------

let cart = [
  { name: "asd", basePrice: 3.5, price: 3.5, amount: 1 },
  { name: "fds", basePrice: 5.5, price: 5.5, amount: 1 },
  { name: "asdv", basePrice: 6.5, price: 6.5, amount: 1 },
];

// let cart = [];

function renderCart() {
  const basketItems = document.getElementById("cart-items");
  const cartTotalWrapper = document.getElementById("cart-total-wrapper");
  const totalPriceSpan = document.getElementById("total");

  basketItems.innerHTML = "";

  cart.forEach((cartItem, index) => {
    basketItems.innerHTML += createCartItem(cartItem, index);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  // console.log(total);

  if (cart.length > 0) {
    totalPriceSpan.textContent = `${total.toFixed(2)} CHF`;
    cartTotalWrapper.classList.add("visible");
  } else {
    cartTotalWrapper.classList.remove("visible");
  }

  adjustCartItemsTop();
}

function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    existingItem.amount += 1;
    existingItem.price = existingItem.basePrice * existingItem.amount;
  } else {
    cart.push({
      name: item.name,
      basePrice: item.price,
      price: item.price,
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

// cart-items top calcualtion for correct sticky behaviour

// function adjustCartItemsTop() {
//   const cartHeader = document.querySelector(".cart-header");
//   const cartItems = document.getElementById("cart-items");
//   const headerHeight = cartHeader.offsetHeight;
//   cartItems.style.top = `${headerHeight}px`;
//   window.addEventListener("resize", adjustCartItemsTop);
// }
