const dishesWrapper = document.getElementById("dishes-wrapper");
let allDishesHTML = "";

for (let dish in dishes) {
  let dishData = dishes[dish];

  dishData.forEach((item) => {
    allDishesHTML += createDishSection(item);
    dishesWrapper.innerHTML = allDishesHTML;
  });
}
