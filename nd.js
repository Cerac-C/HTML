const prompt = require('prompt');

prompt.start();
while(true){
let userInput = prompt("Enter The Mathematical Expression \n+ - / * Are Allowed \n e.g. 2+2");
let i = 0;
let firstNumber = [];
let isNigga1 = false;
let isNigga2 = false;
if(userInput[0]=="-"){
    userInput = userInput.slice(1)
    isNigga1 = true
} 

while(Number.isInteger(parseInt(userInput[i]))){
    firstNumber.push(userInput[i])
    i++;
}
firstNumber = parseInt(firstNumber.join(""));

if(isNigga1){firstNumber = -1 * firstNumber}
let lengthFirst = firstNumber.toString().length;
if(isNigga1){lengthFirst--}
userInput = userInput.slice(lengthFirst);
let operand = userInput.slice(0,1)
userInput = userInput.slice(1)
if(userInput[0]=="-"){
    userInput = userInput.slice(1)
    isNigga2 = true;
}
let secondNumber = parseInt(userInput)
if(isNigga2){secondNumber*=(-1)}
switch (operand){
    case '+' : alert(firstNumber+secondNumber);break;
    case '-' : alert(firstNumber-secondNumber);break;
    case '*' : alert(firstNumber*secondNumber);break;
    case '/' : alert(firstNumber/secondNumber);break;
    default : alert("Wrong Input")
    }
}
