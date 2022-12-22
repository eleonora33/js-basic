const button = document.querySelector("#btn-button");
const recipeInput = document.querySelector("#nameRecipe");
const quantityInput = document.querySelector("#quantity");
const goodsInput = document.querySelector("#ingredients");
const primaryConteiner = document.querySelector(".print");

function getUserInput(names, input, text) {
  primaryConteiner.innerHTML += `<h2> ${names} </h2>`;
  primaryConteiner.innerHTML += `<ul> ${input} </ul>`;
  primaryConteiner.innerHTML += `<li> ${text} </li>`;
}
button.addEventListener("click", function (event) {
  event.preventDefault();
  const printRecipe = recipeInput.value;
  const printQuantity = quantityInput.value;
  const printGoods = goodsInput.value;
  getUserInput(printRecipe, printQuantity, printGoods);
});
