// Assignment code here

var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "=", "[", "]", "{", "}", "|", "/", "?","<", ">", "."];

var passwordInfoArr

function promptUser () {
  passwordInfoArr = [];
  

  passwordLength = prompt("What is your password length? Enter a number from 8-128.");
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength> 128) {
    alert("You need to provide a valid answer! Please try again.");
    return promptUser();
  }

  if (confirm("Would you like to include lower case letters in your password?")) {
    passwordInfoArr = passwordInfoArr.concat(lowerCaseArr);
  }


  if (confirm("Would you like to include upper case letters in your password?")) {
    passwordInfoArr = passwordInfoArr.concat(upperCaseArr);
  }

  if (confirm("Would you like to include numerical characters in your password?")) {
    passwordInfoArr = passwordInfoArr.concat(numbersArr);
  }

  if (confirm("Would you like to include special characters in your password?")) {
    passwordInfoArr = passwordInfoArr.concat(symbolsArr);
  } 
}


function generatePassword() {
  promptUser();
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacterIndex = Math.floor(Math.random() * passwordInfoArr.length);
    password = password + passwordInfoArr[randomCharacterIndex];
  } 
  return password;
}


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




