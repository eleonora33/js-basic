// Homework # 1
// // Create a function called tellStory(array)
// // The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// ["Eli", "happy", "programming"]; // we also need to check if all are strings
// // The function should return one big string with a story made from the arguments
// //return story;
// // Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// // The value that is returned from the function should be printed in the console or in alert
function tellStory(array) {
  const name = array[0];
  const mood = array[1];
  const activity = array[2];
  const story = `This is ${name}. ${name} is a nice person. Today they are ${mood}.
  They are ${activity} all day. The end`;
  return story;
}
console.log(tellStory(["Eli", "happy", "programming"]));
const anotherStory = tellStory(["Kalina", "funny", "cleaning"]);
alert(anotherStory);
// // Homework # 2
// // Write a function that will take an array of 5 numbers as an argument and return the sum.
// // Print it in the console or in alert
// // BONUS: Write another function called validateNumber() that checks if a number is a
// // valid number and call it for every number. If one of the numbers of the array is invalid show
// // an error message instead of a result.
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (!validateNumber(number)) {
      console.log(`invalid value`);
      return;
    }
    sum += number;
  }
  return sum;
}
function validateNumber(number) {
  return typeof number === "number";
}
const resultSumValidNumber = sumOfNumbers([10, 20, 30, 40, 50]);
const resultSum = sumOfNumbers([5, 10, "20", 30, 40]);
console.log(`The sum of numbers in array is: ${resultSum}`);
console.log(`The sum of numbers in array is: ${resultSumValidNumber}`);
// //Homework # 3
// // When given any array of strings (should work with array with any number of elements)
// // It will create one big string and return it
// // Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// // Result: "Hello there students of SEDC!"
const elements = ["Hello", "there", "students", "of", "SEDC", "!"];
alert(` "${elements.join(" ")}"`);
// //Homework # 4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the
// console every number, and will add the "\n" new line after every even number otherwise it
// will add " " empty space.
for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(`****************** ${"\n"}`);
  } else {
    console.log(`${"  "}`);
  }
}
//Homework # 5
// Title: Looping structures
// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it
function getMinMaxNumber(array) {
  let maximum = array[0];
  let minumum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    } else {
      minumum = array[i];
    }
  }
  let result = maximum + minumum;
  console.log(`Max: ${maximum}, Min: ${minumum}, Sum:${result}`);
  return result;
}
const result = getMinMaxNumber([3, 5, 6, 8, 11]);
const otherTypes = getMinMaxNumber(["Eli", "Tose", 1, 5, 6, 10]);
console.log(result);
console.log(otherTypes);

// HOMEWORK #6
// Title: Looping structures
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
function fullName(firstName, lastName) {
  const fullNames = [];
  for (let i = 0; i <= firstName.length - 1; i++) {
    fullNames.push(`${i + 1}${". "}${firstName[i]} ${lastName[i]}`);
  }
  return fullNames;
}
const firstNames = ["Bob", "Jill"];
const lastNames = ["Gregory", "Wurtz"];
const full = fullName(firstNames, lastNames);
console.log(full);
