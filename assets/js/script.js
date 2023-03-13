var characterLength = [];
var choiceArray = [];
var specialCharacter = ["!","@","#","$","^","&","*","(",")","-","=","+","_","`","~","?"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["1","2","3","4","5","6","7","8","9","0"];
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  console.log("Do you know the way to San Jose?")
  var truePrompts = promptAlert();
  var passwordText = document.querySelector("#password");
  if (truePrompts){
    var passwordNew = generatePassword();
    passwordText.value = passwordNew;
  } else {
    passwordText.value = "";
  }
}

function generatePassword () {
  console.log("Click clack gurl");
  var password = "";
  for(var i = 0; i < characterLength; i++){
     var randomCharacter = Math.floor(Math.random() * choiceArray.length);
     password = password + choiceArray[randomCharacter];
  }
  return password;
  }

function promptAlert (){
  console.log("Wascally Wabbits")
  choiceArray = [];
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

