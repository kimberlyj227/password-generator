// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaLower = "abcdefghijklmnopqrstuvwxyz".split("");
        
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var numbers = "1234567890".split("");

var special = "!@#$%^&*(){}?-".split("");

var userLower = confirm("Use lowercase letters?");
var userUpper = confirm("Use uppercase letters?");
var userNum = confirm("Use numbers?");
var userSpecial = confirm("Use special characters?");
var length = prompt("How many characters for your password? (8-128 characters");


function generatePassword() {
  

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  

  console.log(alphaLower);
  console.log(alphaUpper);
  console.log(numbers);
  console.log(special);