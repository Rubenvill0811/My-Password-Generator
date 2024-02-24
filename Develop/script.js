// Game Plan
// when the user enters the site, they will be prompted for the criteria of their password. They will be asked if they want lowercase letters, uppercase letters, numbers, and symnbols. If yes, then it will be included in the generated password. If no, then it will be excluded. Once the criteria has been set a function will select random items out of their respective arrays and string them together randomly to to create a secure password.

// var lowerCase = ['a','b','c',"d","e","f","g","h","i","j","k",];
var charList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "-", "_", "=", "+" ];

// Lowercase letters are 0-25, Uppercase letters are 26-51, Numbers are  51-61, symbols are 62-79. charList array comes to a total of 80.




var lowerCasePrompt = confirm("Do you want to add lowercase letters?");
var upperCasePrompt = confirm("Do you want to add uppercase letters?");
var numberPrompt = confirm("Do you want to add numbers?");
var symbolPrompt = confirm("Do you want add symbols?");

if (lowerCasePrompt === true) {
    console.log("yo");
} else {
  charList.slice(52,80)
  console.log("hi");
}

let lowerAnswer = lowerCasePrompt;
let upperAnswer = upperCasePrompt;
let numberAnswer = numberPrompt;
let symbolAnswer = symbolPrompt;


// function getRandomNumber(min, max) {
//   let step1 = max - min  + 1;
//   let step2 = Math.random() * step1;
//   let result = Math.floor(step2) + min;

//   return result;
// }



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

