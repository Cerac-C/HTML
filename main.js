let userInput = prompt().toString();
let temp = "";
for(let i = 0; i < userInput.length/2 ; i++){
    temp = userInput[i];
    userInput[i] = userInput[userInput.length-1-i];
    userInput[userInput.length-1-i] = temp;
}
console.log(userInput);


