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

    if (length >= 8 || length <= 128) {
        var confirmLower = confirm("Use lowercase letters?");
        var confirmUpper = confirm("Use uppercase letters?");
        var confirmNum = confirm("Use numbers?");
        var confirmSpecial = confirm("Use special characters?");
    } else {
        alert("Please enter a number between 8 and 128. Try again.");
    };

    // conditions for user choices

    // 4 conditions true

    if (confirmLower && confirmUpper && confirmNum && confirmSpecial) {
        userChoices = [...lower, ...upper, ...numbers, ...special];
    }

    // 3 conditions true

    else if (confirmLower && confirmUpper && confirmNum) {
        userChoices = [...lower, ...upper, ...numbers];
    } else if (confirmLower && confirmUpper && confirmSpecial) {
        userChoices = [...lower, ...upper, ...special];
    } else if (confirmLower && confirmNum && confirmSpecial) {
        userChoices = [...lower, ...numbers, ...special];
    } else if (confirmUpper && confirmNum && confirmSpecial) {
        userChoices = [...upper, ...numbers, ...special];
    }

    // 2 conditions true

    else if (confirmLower && confirmUpper) {
        userChoices = [...lower, ...upper];
    } else if (confirmLower && confirmNum) {
        userChoices = [...lower, ...numbers];
    } else if (confirmLower && confirmSpecial) {
        userChoices = [...lower, ...special];
    } else if (confirmUpper && confirmNum) {
        userChoices = [...upper, ...numbers];
    } else if (confirmUpper && confirmSpecial) {
        userChoices = [...upper, ...special];
    } else if (confirmNum && confirmSpecial) {
        userChoices = [...numbers, ...special];
    }

    // 1 condition true

    else if (confirmLower) {
        userChoices = [...lower];
    } else if (confirmUpper) {
        userChoices = [...upper];
    } else if (confirmNum) {
        userChoices = [...numbers];
    } else if (confirmSpecial) {
        userChoices = [...special];
    }

    // 0 conditions true

    else if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpecial) {
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


