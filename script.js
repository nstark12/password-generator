// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function generatePassword
function generatePassword () {

  // Prompt the user for password length (between 8 & 128)

  // Prompt the user for lowercase, uppercase, numeric, special characters

  // Validate input

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