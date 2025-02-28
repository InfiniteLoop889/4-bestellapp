// --------------------- create dish items ---------------------

function createDishSection(dishData) {
  return `
    <div class="dish-container">
        <div class="dish-info">
            <h3>${dishData.name}</h3>
            <!-- <img src="./img/${dishData.image}" alt="${dishData.name}"> -->
            <p>${dishData.description}</p>
            <p class="dish-info-price">${dishData.price.toFixed(2)} CHF</p>
        </div>
        <button class="dish-button" onclick="addToCart({
            name: '${dishData.name}',
            price: ${dishData.price.toFixed(2)},
            amount: ${dishData.amount}
          });">
            <span class="cross">+</span>
        </button>
    </div>
  `;
}

// --------------------- create basket items ---------------------

function createCartItem(cartItem, index) {
  return `
    <div>
        <h3>${cartItem.name}</h3>
    </div>
    <div class="cart-item">
        <button class="decrease" onclick="decreaseAmt(${index})">-</button>
        <p>${cartItem.amount}</p>
        <button class="increase" onclick="increaseAmt(${index})">+</button>
        <p>${cartItem.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">x</button>
    </div>
  `;
}
