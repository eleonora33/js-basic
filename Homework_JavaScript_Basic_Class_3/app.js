// homework 1
// Write a JavaScript function which accepts a parameter and returns its type and prints it
// in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

function getType(parametar) {
  let type = typeof parametar;

  console.log(type);
  return type;
}

getType();
getType(42);
getType("text");
getType(0);
getType(true);
getType(getType);
getType([0]);
getType("");

//homework 2
//Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function convertDogAge() {
  let dogAge = parseInt(prompt("Age of your dog ?"));
  let dogAgeInHumanYears = dogAge * 7;
  console.log(`My dog age in human years is: ${dogAgeInHumanYears}`);

  let userAge = parseInt(prompt("Enter how old are you"));
  let humanYearsInDogAge = (userAge / 7).toFixed(1);
  console.log(
    `Your converted human years into dog age is :${humanYearsInDogAge}`
  );
}

convertDogAge();

function calculateDogAgeInHumanYears(dogAge) {
  return dogAge * 7;
}

function getDogYears() {
  return parseInt(prompt("Age of your dog ?"));
}

function calculateHumangAgeToDogYears(userAge) {
  return (userAge / 7).toFixed(1);
}

function getUserAge() {
  return parseInt(prompt("Enter how old are you"));
}

function dogHumanYearsConversion() {
  const dogYears = getDogYears();
  const dogAgeInHumanYears = calculateDogAgeInHumanYears(dogYears);
  console.log(`My dog age in human years is: ${dogAgeInHumanYears}`);

  let userAge = getUserAge();
  let humanYearsInDogAge = calculateHumangAgeToDogYears(userAge);
  console.log(
    `Your converted human years into dog age is :${humanYearsInDogAge}`
  );
}

dogHumanYearsConversion();

//homework 3
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the amount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

function atm() {
  let userBankAccountAmount = 1000;
  let userInput = parseInt(
    prompt("Please enter the amount you wish to withdraw")
  );

  if (userInput > userBankAccountAmount) {
    alert("Not enough money");
  }

  if (userInput <= userBankAccountAmount) {
    alert(
      `You have withdrawn: ${userInput}.You have left: ${
        userBankAccountAmount - userInput
      }`
    );
  }
}

atm();

// exercise 3
// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
  alert(`Current year is : ${currentYear}`);
  alert(`You are ${currentYear - birthYear} years old`);
}

const currentYear = new Date().getFullYear();

for (let i = 0; i < 3; i++) {
  const birthYear = Number(prompt("Enter birth year"));
  calculateAge(birthYear, currentYear);
}
