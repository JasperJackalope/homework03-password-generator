// Assignment Code
// main assignment is to define the fucntion writePassword 
var generateBtn = document.querySelector("#generate");
// above targets the generate button, event listener added at the end for the even on click.

function generatePassword () {
  console.log("Click clack gurl");

  return "Password TBD"
  }

// Write password to the #password input. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  // takes value of generated password and displays it on screen

}

// Don't touch above. Write all code below

// function generatePassword () {

// }

// Add event listener to generate button. below calls the writePasswork function stared above. need to write the writePassword function. 
generateBtn.addEventListener("click", writePassword);
