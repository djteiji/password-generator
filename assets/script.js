// Assignment code here

var passwordInfo = {
  lower: "hither",
  upper: upperCase,
  number: numberGenerator,
  symbol: symbolGenerator
}
console.log(passwordInfo.lower);

var lowerCase = function  () {
  return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
}

var upperCase = function () {
  return String.fromCharCode(Math.floor(Math.random() *26)+ 65);
}

var numberGenerator = function () {
  return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
}

var symbolGenerator = function () {
  var symbols = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
  return symbols[Math.floor(Math.random()* symbols.length)]; 
}
console.log(lowerCase());




// var password =document.getElementById("password");

// var passwordElements = [];
// console.log(passwordElements);


// var generatePassword = function () {

//   var passwordLength = (8-128);
//   console.log(passwordLength);
  // prompt("What is your password length? Enter a number from 8-128.");
  // if (passwordLength < 8 || passwordLength> 128) {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   return generatePassword();
  // } else passwordElements.push(passwordLength);



  //   var confirmLowerCase = confirm("Would you like to include lower case letters in your password?");
  // //  if confirmLowerCase {}
      

  //   var confirmUpperCase = confirm("Would you like to include upper case letters in your password?");

  //   var confirmNumerical = confirm("Would you like to include numerical characters in your password?");

  //   var confirmSpecialCharacters = confirm("Would you like to include special characters in your password?");
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
