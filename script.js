// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function generatePassword
function generatePassword () {
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '!', '?', ':', '(', ')', '[', ']', '{', '}', '~', '_', '-', '.'];
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Prompt the user for password length (between 8 & 128)
  var passwordLength = window.prompt("How many characters would you like your password to contain? Between 8 & 128 ");

  // Prompt the user for lowercase, uppercase, numeric, special characters
  specialCharacters = window.confirm("Click OK to include special characters.");
  upperCase = window.confirm("Click OK to include uppercase letters.");
  lowerCase = window.confirm("Click OK to include lowercase letters.");
  numeric = window.confirm("Click OK to include numerics.");

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