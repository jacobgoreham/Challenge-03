var choiceArr = [];

var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

// Assigntment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password for the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i > characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(
    prompt("How many characters would you like to use? Must be between 8-128")
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Must be between 8-128. Try again.");
    return false;
  }

  if (confirm("Would you like Lowercase to be included?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like Uppercase to be included?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like Symbols to be included?")) {
    choiceArr = choiceArr.concat(symbolsArr);
  }
  if (confirm("Would you like Numbers to be included?")) {
    choiceArr = choiceArr.concat(numbersArr);
  }

  return true;
}
