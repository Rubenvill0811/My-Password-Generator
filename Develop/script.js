// Game Plan
// when the user enters the site, they will be prompted for the criteria of their password. They will be asked if they want lowercase letters, uppercase letters, numbers, and symnbols. If yes, then it will be included in the generated password. If no, then it will be excluded. Once the criteria has been set a function will select random items out of their respective arrays and string them together randomly to to create a secure password.

var lowerCase = ['a','b','c'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var numChar = ["1","2","3","4","5","6","7","8","9","10"];
var symChar = ["~","!","@","#","$","%","^","&","*"]

function generatePassword() {
  var lowerCasePrompt = confirm("Do you want to add lowercase letters?")
  var upperCasePrompt = confirm("Do you want to add uppercase letters?")

if (lowerCasePrompt === true) {
  // if the user clicks on yes, then include lowercase letters into the generated password. 
}

  // var numberPrompt = confirm("Would")
}

function getRandomNumber(min, max) {
  let step1 = max - min  + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

console.log(lowerCase);

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
