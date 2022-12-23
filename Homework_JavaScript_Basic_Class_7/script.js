//Exercise # 1
// Write a JavaScript function to retrieve all the values of an object's properties
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// };
// Sample Output: "David Rayy","VI",12

let student = {
  name: "Eleonora Todorovska",
  sclass: "G1",
  rollno: 12,
  developer: "fullstack",
};
console.log(student.name, student.sclass, student.rollno, student.developer);

//Exercise # 2
// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12
// }

let studentProperty = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(studentProperty);
delete studentProperty.rollno;
console.log(studentProperty);

// Exercise # 3
// Write a JavaScript function to check if an object contains given property

const person = {
  firstName: "Eleonora",
  lastName: "Todorovska",
  city: "Skopje",
  age: 39,
  isCar: true,
  isHome: true,
  isDog: false,
  isBrother: true,
  children: 2,
};

for (const property in person) {
  if (person.hasOwnProperty(property)) {
    console.log(`This is (${property}). Value is : ${person[property]}`);
  } else {
    console.log(property);
  }
}

let result = person.hasOwnProperty("city", "age", "isCar");
console.log(result);
let other = person.hasOwnProperty("Ohrid");
console.log(other);
let otherCheck = person.city !== "undefined";
console.log(otherCheck);

//Exercise #4
// Create a car object with some properties
// model, color, year, fuel, fuelConsumption
// . and a method that calculate how much fuel you will need to pass some distance.

const myCar = {
  model: "opel",
  color: "white",
  tipOfFuel: "dizel",
  distance: 500,
  consumption: 6,
  formulaForFuelConsumption: function () {
    return this.distance / this.consumption;
  },
};

console.log(myCar.formulaForFuelConsumption().toFixed(2));
