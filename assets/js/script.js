// Assignment Code
// main assignment is to define the fucntion writePassword 
var generateBtn = document.querySelector("#generate");
// above targets the generate button, event listener added at the end for the even on click.

function generatePassword () {
  console.log("Click clack gurl");

  // PS 1 - prompt user with series re: criteria
  // PS 1.1 - prompt user with length 8-128
  // PS 1.2 - prompt user with lower, upper, special 
  // PS 2 - validate input
  // PS 3 - generate password
  

  return "Password TBD"
  // PS 4 - display  password on page. already done, with return line
  // shows that the event is connect and working. at the very end, need to return something, store generated passwork into a variable and return that. 
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
