// Assignment code here

var generatePassword = function () {

  var passwordLength = prompt("What is your password length? Enter a number from 8-128.");
  if (passwordLength < 8 || passwordLength> 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }
    var confirmLowerCase = confirm("Would you like to include lower case letters in your password?");
  //  if confirmLowerCase {}

    var confirmUpperCase = confirm("Would you like to include upper case letters in your password?");

    var confirmNumerical = confirm("Would you like to include numerical characters in your password?");

    var confirmSpecialCharacters = confirm("Would you like to include special characters in your password?");
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
