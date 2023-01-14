const selectCategoryElement = document.querySelector("#categories");

selectCategoryElement.addEventListener("change", function (event) {
  resetGameSettings();
  gameConfiguration.chosenCategory = event.target.value;

  document.querySelector(".output").textContent =
    gameConfiguration.chosenCategory;

  if (gameConfiguration.chosenCategory === "Fruits") {
    let fruitsCategory = gameConfiguration.categories.fruits;
    let randomCategoryIndex = Math.floor(Math.random() * fruitsCategory.length);
    gameConfiguration.wordToGuess = fruitsCategory[randomCategoryIndex];
  }

  if (gameConfiguration.chosenCategory === "Movies") {
    let moviesCategory = gameConfiguration.categories.movies;
    let randomCategoryIndex = Math.floor(Math.random() * moviesCategory.length);
    gameConfiguration.wordToGuess = moviesCategory[randomCategoryIndex];
  }

  if (gameConfiguration.chosenCategory === "Countries") {
    let countriesCategory = gameConfiguration.categories.countries;
    let randomCategoryIndex = Math.floor(
      Math.random() * countriesCategory.length
    );
    gameConfiguration.wordToGuess = countriesCategory[randomCategoryIndex];
  }

  const userInputSection = document.querySelector(".primary-container");
  userInputSection.innerHTML = "";

  for (let i = 0; i < gameConfiguration.wordToGuess.length; i++) {
    if (gameConfiguration.wordToGuess[i] === " ") {
      userInputSection.innerHTML += `<span id="word-to-guess-letter-${i}" class="word-holder">-</span>`;
    } else {
      userInputSection.innerHTML += `<span id="word-to-guess-letter-${i}" class="word-holder">_</span>`;
    }
  }
});

createLetterButtons();

const alphabetButtons = document.querySelectorAll(".alphabet-btn");

for (let button of alphabetButtons) {
  button.addEventListener("click", function (event) {
    const chosenLetter = button.textContent;

    if (gameConfiguration.currentLives > 0) {
      gameConfiguration.chosenLetters.push(chosenLetter);
      checkLetter(chosenLetter);
    }

  });
}


