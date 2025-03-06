// -----------------------------------------------------------
// create category
// -----------------------------------------------------------

function createCategory(dish) {
  return `
      <div class="category-header">${dish}</div>
  `;
}

// -----------------------------------------------------------
// create categogry header
// -----------------------------------------------------------

function createCategogryHeader(categogry) {
  return `
      <div class="category"><h2>${categogry}</h2></div>
  `;
}

// -----------------------------------------------------------
// create dish items
// -----------------------------------------------------------

function createDishSection(dishData) {
  return `
    <div class="dish-item">
        <div class="dish-info">
            <h3>${dishData.name}</h3>
            <!-- <img src="./img/${dishData.image}" alt="${dishData.name}"> -->
            <p>${dishData.description}</p>
            <p class="dish-info-price">${dishData.basePrice.toFixed(2)} CHF</p>
        </div>
        <button class="dish-button" onclick="addToCart({
            name: '${dishData.name}',
            basePrice: ${dishData.basePrice.toFixed(2)},
          });">
            <span class="cross">+</span>
        </button>
    </div>
  `;
}

// -----------------------------------------------------------
// create cart items
// -----------------------------------------------------------

function createCartItem(cartItem, index) {
  return `
    <div class="cart-item">
        <h3>${cartItem.name}</h3>
        <div class="cart-item-info">
            <button class="decrease" onclick="decreaseAmt(${index})">-</button>
            <p>${cartItem.amount}</p>
            <button class="increase" onclick="increaseAmt(${index})">+</button>
            <p>${cartItem.price.toFixed(2)}</p>
            <button onclick="removeItem(${index})">x</button>
        </div>
    </div>
  `;
}
