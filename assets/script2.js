// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");


// Variables and arrays
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var special = "!#$%&'()*+-/;:<=>?@~^".split("");
var userChoices = [];

// function to generate password 

function generatePassword() {

    var length = parseInt(prompt("How many characters will your password have? Enter a value between 8 and 128."));

    // validates whether user input is between 8 and 128

    if (length >= 8 && length <= 128) {
        var confirmLower = confirm("Use lowercase letters?");
        var confirmUpper = confirm("Use uppercase letters?");
        var confirmNum = confirm("Use numbers?");
        var confirmSpecial = confirm("Use special characters?");
    } else {
        alert("Please enter a number between 8 and 128. Try again.");
        
    };

    // conditions for user choices

    
    if (confirmLower) {
        userChoices = [...userChoices, ...lower];
    }

    if (confirmUpper) {
        userChoices = [...userChoices, ...upper];
    }

    if (confirmNum) {
        userChoices = [...userChoices, ...numbers];
    }

    if (confirmSpecial) {
        userChoices = [...userChoices, ...special];
    }

    if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
        alert("You must choose at least ONE parameter. Try again");
    };

    pass = [];

    for (var i = 0; i < length; i++) {
        var pickChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        pass.push(pickChoices);
    }

    // return array to be used in writePassword
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


