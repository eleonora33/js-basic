//Homework#3
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

const submitBtn = document.querySelector("#btn-button");
const nameRecipeInput = document.querySelector("#inputName");
const quantitiyInput = document.querySelector("#inputQuantity");
const nemeIngredientInput = document.querySelector("#nameOfIngredient");
const paramContainer = document.querySelector("#param-container");
const listOfAllInputs = document.querySelector(".list");

function printInputName(names, inputs, goods) {
  paramContainer.innerHTML = `${names}`;
  listOfAllInputs.innerHTML += `<ul>${inputs}</ul>`;
  listOfAllInputs.innerHTML += `<li>${goods}</li>`;
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const nameRecipe = nameRecipeInput.value;
  const quantity = quantitiyInput.value;
  const nameGoods = nemeIngredientInput.value;
  printInputName(nameRecipe, quantity, nameGoods);
});
