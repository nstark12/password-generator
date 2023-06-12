// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function generatePassword
function generatePassword () {

  // Prompt the user for password length (between 8 & 128)
  var passwordLength = window.prompt("How many characters would you like your password to contain? Between 8 & 128 ");

  // Prompt the user for lowercase, uppercase, numeric, special characters
  var specialCharacters = window.confirm("Click OK to include special characters.");
  var upperCase = window.confirm("Click OK to include uppercase letters.");
  var lowerCase = window.confirm("Click OK to include lowercase letters.");
  var numeric = window.confirm("Click OK to include numerics.");

  // Validate input

  // Generate password

  // Password displays to page
  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When user clicks the generate button, it will call the writePassword function
generateBtn.addEventListener("click", writePassword);