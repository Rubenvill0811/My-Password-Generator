// Game Plan
// when the user enters the site, they will be prompted for the criteria of their password. They will be asked if they want lowercase letters, uppercase letters, numbers, and symnbols. If yes, then it will be included in the generated password. If no, then it will be excluded. Once the criteria has been set a function will select random items out of their respective arrays and string them together randomly to to create a secure password.

// var lowerCasePrompt = confirm("Do you want to add lowercase letters?");
// var upperCasePrompt = confirm("Do you want to add uppercase letters?");
// var numberPrompt = confirm("Do you want to add numbers?");
// var symbolPrompt = confirm("Do you want add symbols?");

const uppercaseEl = document.getElementById('')


const randomFunc = {
  number: grabRandomNumber,
  upper: grabRandomUpperCase,
  lower: grabRandomLowerCase,
  symbol: grabRandomSymbol
};

function grabRandomNumber() {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
  return numbers[Math.floor(Math.random() * numbers.length)]; 
}

function grabRandomUpperCase() {
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
  return uppercase[Math.floor(Math.random() * uppercase.length)]; 
}

function grabRandomLowerCase() {
  const lowerCasecase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  
  return lowerCasecase[Math.floor(Math.random() * lowerCasecase.length)]; 
}

function grabRandomSymbol() {
  const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", ";", ":", "<", ">", "?", "~"];  
  return symbol[Math.floor(Math.random() * symbol.length)]; 
}

// My code ^

console.log(grabRandomSymbol());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

