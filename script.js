// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

var alphaLower = "abcdefghijklmnopqrstuvwxyz".split("");
        
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var numbers = "1234567890".split("");

var special = "!@#$%^&*(){}?-".split("");

var userLower;
var userUpper;
var userNum;
var userSpecial;
var length;
var userChoices; // will become user choices


//string1.concat(string2, string 3) ---- concat used to join 2 or more strings

function generatePassword() {

  var length = parseInt(prompt("How many characters for your password? Enter a number between 8-128."));
  

// validate user input

  if (length >= 8 && length <= 128) {

    // after length is validated
      var userLower = confirm("Use lowercase letters?");
      var userUpper = confirm("Use uppercase letters?");
      var userNum = confirm("Use numbers?");
      var userSpecial = confirm("Use special characters?");

  } else {
    alert("Please enter a value between 8 and 128!");
  };

    // 4 conditions true
  if (userLower && userUpper && userNum && userSpecial) {
    userChoices = alphaLower.concat(alphaUpper, numbers, special);
  }

    // 3 conditions true
  else if (userLower && userUpper && userNum) {
    userChoices = alphaLower.concat(alphaUpper, numbers);
  
  } else if(userLower && userUpper && userSpecial) {
    userChoices = alphaLower.concat(alphaUpper, special);
  
  } else if (userLower && userNum && userSpecial) {
    userChoices = alphaLower.concat(numbers, special);
  
  } else if (userUpper && userNum && userSpecial) {
    userChoices = alphaUpper.concat(numbers, special);
  }

    // 2 conditions true 

  else if (userLower && userUpper) {
    userChoices = alphaLower.concat(alphaUpper);

  } else if (userLower && userNum) {
    userChoices = alphaLower.concat(numbers);

  } else if (userLower && userSpecial) {
    userChoices = alphaLower.concat(special);

  } else if (userUpper && userNum) {
    userChoices = alphaUpper.concat(numbers);

  } else if (userUpper && userSpecial) {
    userChoices = alphaUpper.concat(special);

  } else if (userNum && userSpecial) {
    userChoices = numbers.concat(special);
  }

    // 1 condition true 
  
  else if (userLower) {
    userChoices = alphaLower;

  } else if (userUpper) {
    userChoices = alphaUpper;
    
  } else if (userNum) {
    userChoices = numbers;

  } else if (userSpecial) {
    userChoices = special;
  }

    // 4 negative values
  
  else if (!userLower && !userUpper && !userNum && !userSpecial) {
    alert("You must choose at least ONE parameter.");
  };

  // console.log(userChoices);

pass = [];

  for (i=0; i < length; i++) {
    var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    pass.push(pickChoices);
  }

    // allows result to be used in writePassword function
  return pass.join("");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

// function to copy to clipboard
function copyPassword() {
  var copyPass = document.querySelector("#password");

  copyPass.select();
  document.execCommand("copy");
  
  alert("Password copied to clipboard!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);




  

