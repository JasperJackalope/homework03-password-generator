// Assignment Code
// main assignment is to define the fucntion writePassword
// add var

var characterLength = 8;
var choiceArray = [];

var specialCharacter = ["!","@","#","$","^","&","*","(",")","-","=","+","_","`","~","?"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];

var generateBtn = document.querySelector("#generate");
// above targets the generate button, event listener added at the end for the even on click.

generateBtn.addEventListener("click", writePassword);



// Write password to the #password input. 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  // takes value of generated password and displays it on screen

}

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

function promptAlert (){
  characterLength = parseInt(prompt("How long should the password be? Please choose between 8-128 characters."));
  if (isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
    alert("Please enter character length as a number, between 8-128. Please try again.");
    return false;
  }
  if (confirm("Would you like to include lowercase letters in the password?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (confirm("Would you like to include uppercase letters in the password?")) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like to include special characters in the password?")) {
    choiceArray = choiceArray.concat(specialCharacter);
  }
  if (confirm("Would you like to include numbers in the password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;

}
// Don't touch above. Write all code below

// function generatePassword () {

// }

// Add event listener to generate button. below calls the writePasswork function stared above. need to write the writePassword function. 

