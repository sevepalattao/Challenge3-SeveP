// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var passLength = window.prompt("How long would you like your password to be? (min.8 - max.128)");
    var lowerChoice = window.confirm("Would you like it to include lower case characters?");
    var upperChoice = window.confirm("Would you like it to include upper case characters?");
    var numericChoice = window.confirm("Would you like it to include numeric characters?");
    var specialChoice = window.confirm("Would you like it to include special characters?");
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeric = '0123456789';
    var special = '!@#$%^&*_-+=(),./:;<>?[]{}~';
    var passphrase = '';
    var realPassword = '';
    if (lowerChoice) {
        passphrase = passphrase + lowerCase;
    } 
    if (upperChoice) {
        passphrase = passphrase + upperCase;
    } 
    if (numericChoice) {
        passphrase = passphrase + numeric;
    } 
    if (specialChoice) {
        passphrase = passphrase + special;
    }
    for (var i = 0; i < passLength; i++) {
        realPassword += passphrase.charAt(Math.floor(Math.random() * passphrase.length));
    }
    return realPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);