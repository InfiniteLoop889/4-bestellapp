// -----------------------------------------------------------
// create category
// -----------------------------------------------------------

function createCategory(categogry) {
  return `
      <a href="#${categogry}" class="category">${categogry}</a>
  `;
}

// -----------------------------------------------------------
// create categogry header
// -----------------------------------------------------------

function createCategogryHeader(categogry, categoryData) {
  return `
      <img id="${categogry}" class="category-header-img" src="${categoryData.image}">
      <div class="category-header"><h2>${categogry}</h2></div>
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
            <img src="./assets/icons/icons8-plus-24.png" alt="Add to cart" class="plus-icon">
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
        <div class="cart-item-content">
            <div class="cart-item-amount">
                <button class="decrease" onclick="decreaseAmt(${index})">-</button>
                <p>${cartItem.amount}</p>
                <button class="increase" onclick="increaseAmt(${index})">+</button>
            </div>
            <span class="cart-item-price">${cartItem.price.toFixed(2)} CHF</span>
            <button class="remove-btn" onclick="removeItem(${index})"></button>
        </div>
    </div>  
  `;
}
