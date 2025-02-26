// ---------------------- Main content from db.js ----------------------

// variables

const dishesWrapper = document.getElementById("dishes-wrapper");

// functions

function renderDishes() {
  dishesWrapper.innerHTML = "";

  for (let dish in dishes) {
    let dishData = dishes[dish];

    dishData.forEach((dishItem) => {
      dishesWrapper.innerHTML += createDishSection(dishItem);
    });
  }
}

// ---------------------- cart section ----------------------

// variables

const basketItems = document.getElementById("basket-items");
let cart = [1, 2, 3, "asd"];

// functions

function renderCart() {
  basketItems.innerHTML = "";

  cart.forEach((cartItem) => {
    basketItems.innerHTML += createCartItem(cartItem);
  });
}

function addToCart(item) {
  cart.push(item);
  renderCart();
}
