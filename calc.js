let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function pressNumber(num){

if(operator === ""){
firstNumber += num;
display.value = firstNumber;
}
else{
secondNumber += num;
display.value = secondNumber;
}

}

function setOperator(op){
operator = op;
}

function calculate(){

let result;

let num1 = Number(firstNumber);
let num2 = Number(secondNumber);

if(operator === "+"){
result = num1 + num2;
}

else if(operator === "-"){
result = num1 - num2;
}

else if(operator === "*"){
result = num1 * num2;
}

else if(operator === "/"){
result = num1 / num2;
}

display.value = result;

firstNumber = result;
secondNumber = "";
operator = "";
}

function clearDisplay(){
display.value = "";
firstNumber = "";
secondNumber = "";
operator = "";
}