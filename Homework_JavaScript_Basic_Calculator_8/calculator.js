let numbers = document.getElementsByClassName("numbers");
let result = document.getElementById("result");
let inputs = document.querySelector("#inputs");
let decimalBtn = document.querySelector("#decimal");
let sumBtn = document.querySelector("#sum");
let multiplyBtn = document.querySelector("#multiply");
let divideBtn = document.querySelector("#divide");
let subtractBtn = document.querySelector("#subtract");
let equalsBtn = document.querySelector("#equalsBtn");
let resetBtn = document.querySelector("#resetBtn");



let total = 0;
result.innerText = total;
let values = [total, [0]];
let isDecimal = false;
for(let i = 0; i < numbers.length; i++){
	numbers[i].addEventListener("click", function(){
		// result.innerText = total;
		inputs.innerText+=numbers[i].value;
		values[1].push(numbers[i].value);
		console.log(values);
		// result.innerText = convertString(values[1]);
	});
};
function convertString(arr){
	let con = "";
	for(let i = 0; i < arr.length; i ++){
		con += arr[i];
	}
	return parseFloat(con);
};
function sum(a, b){
	return a + b;
};
function subtract(a, b){
	return a - b;
};
function multiply(a, b){
	return a * b;
};
function divide(a, b){
	return a / b;
};
let operator = "+";
function checkOperator(){
    if(operator == "+"){
		total = sum(total, convertString(values[1]));
        return total;
    }else if(operator=="-"){
		total = subtract(total, convertString(values[1])); 
        return total;
    } else if(operator=="*"){
		total = multiply(total, convertString(values[1]));
        return total;
    }else if(operator=="/"){
		total = divide(total, convertString(values[1])); 
        return total;
    }
};

function reset(){
	values = [total, []];
	isDecimal = false;
	result.innerText = total;
	inputs.innerText = "";
	operator = "+";
}
resetBtn.addEventListener("click", function(){
	total = 0;
	reset();
});
equalsBtn.addEventListener("click", function(){
	checkOperator();
	reset();
	total = 0;
});
function operation(btn){
	checkOperator();
	values[1] = [];
	result.innerText = total;
	inputs.innerText = btn.innerText;
	isDecimal = false;
	operator = btn.innerText;	
}
sumBtn.addEventListener("click", function(){
	operation(this);
});
subtractBtn.addEventListener("click", function(){
	operation(this);
});
multiplyBtn.addEventListener("click", function(){
	operation(this);
});
divideBtn.addEventListener("click", function(){
	operation(this);
});

decimalBtn.addEventListener("click", function(){
	if(isDecimal === false){
		values[1].push(".")
		inputs.innerText += ".";
		isDecimal = true;
	} 
});