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
            price: ${dishData.price.toFixed(2)}
          });">
            <span class="cross">+</span>
        </button>
    </div>
  `;
}

// --------------------- create basket items ---------------------

function createCartItem(cartItem) {
  return `
    <h3>${cartItem.name}</h3>
    <p>${cartItem.price.toFixed(2)}</p>
  `;
}
