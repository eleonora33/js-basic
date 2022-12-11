// homework for switch - chinese horoscop

//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

// 0 - Rat
// 1 - Ox
// 2 - Tiger
// 3 - Rabbit
// 4 - Dragon
// 5 - Snake
// 6 - Horse
// 7 - Goat
// 8 - Monkey
// 9 - Rooster
// 10 - Dog
// 11 - Pig

let userInputYearOfBirth = Number(prompt("Enter birth year"));
let calculateFormulaForChineseZodiac = (userInputYearOfBirth - 4) % 12;

switch (calculateFormulaForChineseZodiac) {
  case 0:
    console.log("Rat");
    break;
  case 1:
    console.log("Ox");
    break;
  case 2:
    console.log("Tiger");
    break;
  case 3:
    console.log("Rabbit");
    break;
  case 4:
    console.log("Dragon");
    break;
  case 5:
    console.log("Snake");
    break;
  case 6:
    console.log("Horse");
    break;
  case 7:
    console.log("Goat");
    break;
  case 8:
    console.log("Monkey");
    break;
  case 9:
    console.log("Rooster");
    break;
  case 10:
    console.log("Dog");
    break;
  case 11:
    console.log("Pig");
    break;

  default:
    console.log("Sorry there is no such a zodiac in chinese horoscop");
    break;
}
