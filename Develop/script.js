// Assignment code here
// 
// function createRandomUc() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function createRandomLc() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function createRandomInt() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

var lowerCase = ['a','b','c'];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function generatePassword() {
  var lowerCasePrompt = confirm("Do you want to add lowercase letters?")
  var upperCasePrompt = confirm("Do you want to add uppercase letters?")

if (lowerCasePrompt === true) {
  // 
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
