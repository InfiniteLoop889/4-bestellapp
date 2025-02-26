// --------------------- render dish items ---------------------

function createDishSection(dishData) {
  return `
    <div class="dish-container">
        <div class="dish-info">
            <h3>${dishData.name}</h3>
            <!-- <img src="./img/${dishData.image}" alt="${dishData.name}"> -->
            <p>${dishData.description}</p>
            <p class="dish-info-price">${dishData.price.toFixed(2)} CHF</p>
        </div>
        <button class="dish-button" onclick="addToCart('${dishData.name}')">
            <span class="cross">+</span>
        </button>
    </div>
  `;
}

// --------------------- render basket items ---------------------

function createCartItem(cartItem) {
  return `
    <h3>${cartItem}</h3>
  `;
}
