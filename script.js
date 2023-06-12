// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define function generatePassword
function generatePassword () {

    // define all variables and populate arrays for each
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '!', '?', ':', '(', ')', '[', ']', '{', '}', '~', '_', '-', '.'];
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var possibleCharacters = [];

  // Prompt the user for password length (between 8 & 128)
  var passwordLength = window.prompt("How many characters would you like your password to contain? Between 8 and 128 ");
  if (passwordLength < 8 || passwordLength > 128) {
    // return message if number entered is not between 8 and 128
    return "Please choose a number between 8 and 128";
  } else if (isNaN(passwordLength)) {
    // return message if non-number is entered
    passwordLength = window.prompt("Please choose a number between 8 and 128");
  } else {
    // confirm chosen length of password as alert
    window.alert("You have chosen a password that is " + passwordLength + " characters long");
  }

  // Prompt the user for lowercase, uppercase, numeric, special characters
  hasSpecialCharacters = window.confirm("Click OK to include special characters.");
  hasUppercase = window.confirm("Click OK to include uppercase letters.");
  hasLowercase = window.confirm("Click OK to include lowercase letters.");
  hasNumeric = window.confirm("Click OK to include numerics.");

  // If user does not accept any character types display message
  if (hasSpecialCharacters === false && hasUppercase === false && hasLowercase === false && hasNumeric === false) {
    return "Choose at least one character type.";
  }

  // Group the characters selected by user
  if (hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (hasNumeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
  }

  // Generate final password
  var userPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    userPassword += possibleCharacters[Math.floor(Math.random() * (possibleCharacters.length))];

  }

  // Password displays to page
  return userPassword;
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