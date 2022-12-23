//CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let table = document.createElement("table");
let tbody = document.createElement("tbody");

table.appendChild(tbody);
document.getElementById("pattern").appendChild(table);

let row = prompt("Enter rows?");
let column = prompt("Enter columns?");

for (let i = 0; i < row; i++) {
  let rowInput = document.createElement("tr");
  for (let j = 0; j < column; j++) {
    let columnsInput = document.createElement("td");
    columnsInput.innerHTML = `row - ${i + 1} column - ${j + 1}`;
    rowInput.appendChild(columnsInput);
  }

  tbody.appendChild(rowInput);
}
