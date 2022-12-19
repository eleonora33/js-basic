// Homework # 1
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let paragraphOne = document.querySelector(".paragraph");
console.log(paragraphOne.innerText);
paragraphOne.innerText =
  "Лионел Меси мораше да ги одложи своите обврски кон новинарите поради големата прослава која ја режираа Аргентинците на теренот, откако генерацијата која тој ја водеше како капитен од вечерва е бесмртна поради освоената светска титула.";
let paragraphTwo = document.querySelector(".second");
console.log(paragraphTwo.innerText);
paragraphTwo.innerText =
  "По трет пат во историјата, „гаучосите“ излегоа како победници на еден фудбалски мундијал и Меси ја освои единствената титула која му недостасуваше, па при давањето на првото интервју за „Tyc Sports“, не криел дека веќе не му е потребно ништо друго за остварување до крајот на кариерата.";
let headerId = document.querySelector("#myTitle");
console.log(headerId.innerText);
headerId.innerText =
  "Меси: Импресивно е да се заврши кариерата на ваков начин!";
let headerFirst = document.querySelector(".headerTwo");
console.log(headerFirst.innerText);
headerFirst.innerText = "СВЕТСКИ ПРВЕНСТВА";
let headerThree = document.querySelector("h3");
console.log(headerThree.innerText);
headerThree.innerText =
  " Си го остварив детскиот сон, на крајот го освоив она што ми недостасуваше. Ја завршувам кариерата на најдобар можен начин, бидејќи сигурно е дека не ми преостанува уште многу. Ги играм последните години и импресивно е што станав светски шампион со мојата Аргентина, – изјавил Меси кој беше избран и за МВП на турнирот во Катар.";

//Homework # 2
//   Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let addElementList = document.querySelector(".myListOfNumbers");

function printAndSum(numbers) {
  console.log(addElementList);
  let sum = 0;
  addElementList.innerHTML += `<ul>`;
  for (let number of numbers) {
    addElementList.innerHTML += `<li>${number}</li>`;
    console.log(number);
    sum += number;
  }
  addElementList.innerHTML += `<li> Total is: ${numbers.join(
    "+"
  )} = ${sum}</li>`;
  addElementList.innerHTML += `</ul>`;
  return sum;
}
const numbersSum = printAndSum([1, 5, 6, 10, 20, 30, 40]);
console.log(numbersSum);
