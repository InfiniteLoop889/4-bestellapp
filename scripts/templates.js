function createDishSection(dishData) {
  return `
    <div class="dish-container">
        <div class="dish-info">
            <h3>${dishData.name}</h3>
            <!-- <img src="./img/${dishData.image}" alt="${dishData.name}"> -->
            <p>${dishData.description}</p>
            <p class="dish-info-price">${dishData.price.toFixed(2)} CHF</p>
        </div>
        <div class="dish-button">
            <span class="cross">+</span>
        </div>
    </div>
  `;
}
