var passLength;
var hasNumbers;
var hasUppercase;
var hasLowercase;
var hasSymbols;

const passPrompt = () => {
  passLength = parseInt(prompt("How many characters would you like the password to be? Choose between 8 & 128"));
  console.log("Password length " + passLength);
    if (isNaN(passLength) == true || passLength < 8 || passLength > 128) {
      alert("Password must be between 8 & 128 characters");
      passPrompt();
      return;
    }
      
      hasNumbers = confirm("Would you like to include numbers?");
      console.log("Number " + hasNumbers);
      hasUppercase = confirm("Would you like to include uppercase letters?");
      console.log("Uppercase " + hasUppercase);
      hasLowercase = confirm("Would you like to include lowercase letters?");
      console.log("Lowercase " + hasLowercase);
      hasSymbols = confirm("Would you like to include special characters?");
      console.log("Symbols " + hasSymbols);
      console.log(passLength, hasNumbers, hasUppercase, hasLowercase, hasSymbols);  
};

const passGenerate = () => {
  var lowerString = "abcdefghijklmnopqrstuvwxyz";
  var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numString = "0123456789";
  var symbolString = "!@#$%^&*()";
  var chosenString = "";
  var password = "";

  if (hasLowercase === true) {
    chosenString += lowerString;
  }
  if (hasUppercase === true) {
    chosenString += upperString;
  }
  if (hasNumbers === true) {
    chosenString += numString;
  }
  if (hasSymbols === true) {
    chosenString += symbolString;
  }
  console.log(chosenString);

  for (var index = 0; index < passLength; index++) {
    var randomIndex = Math.floor(Math.random() * chosenString.length);
    var randomChar = chosenString[randomIndex];
    console.log(randomChar);
    password = password + randomChar;
  }
  console.log(password);
  return password;
};

function passVerify(){
  genratedPassword = passGenerate();
  if (hasLowercase) {
    var verifiedLower = false;
    for (var index = 0; index < passLength; index++) {
      var possibleLower = genratedPassword[index];
      if (
        possibleLower == "a" || possibleLower == "b" || possibleLower == "c" ||
        possibleLower == "d" || possibleLower == "e" || possibleLower == "f" ||
        possibleLower == "g" || possibleLower == "h" || possibleLower == "i" ||
        possibleLower == "j" || possibleLower == "k" || possibleLower == "l" ||
        possibleLower == "m" || possibleLower == "n" || possibleLower == "o" ||
        possibleLower == "p" || possibleLower == "q" || possibleLower == "r" ||
        possibleLower == "s" || possibleLower == "t" || possibleLower == "u" ||
        possibleLower == "v" || possibleLower == "w" || possibleLower == "x" ||
        possibleLower == "y" || possibleLower == "z") {
        verifiedLower = true;
      }
    }
    if (verifiedLower === false) {
      console.log("no lowercase characters!");
      passVerify();
    }
  }

  if (hasSymbols) {
    var verifiedSym = false;
    for (var index = 0; index < passLength; index++) {
      var possibleSym = genratedPassword[index];
      if (possibleSym == "!" || possibleSym == "@" || possibleSym == "#" ||
        possibleSym == "$" || possibleSym == "%" || possibleSym == "^" ||
        possibleSym == "&" || possibleSym == "*" || possibleSym == "(" ||
        possibleSym == ")") {
        verifiedSym = true;
      }
    }
    if (verifiedSym === false) {
      console.log("no spec characters!");
      passVerify();
    }
  }

if (hasNumbers) {
  var verifiedNumbers = false;
  for (var index = 0; index < passLength; index++) {
    var possibleNumbers = genratedPassword[index];
    if (possibleNumbers == "1" || possibleNumbers == "2" || possibleNumbers == "3" || possibleNumbers == "4" || possibleNumbers == "5" || possibleNumbers == "6" || possibleNumbers == "7" || possibleNumbers == "8" || possibleNumbers == "9" || possibleNumbers == "0") {
      verifiedNumbers = true;
    }
  }
  if (verifiedNumbers === false) {
    console.log("No Numbers!");
    passVerify();
  }
}

if (hasUppercase) {
  var verifiedUpper = false;
  for (var index = 0; index < passLength; index++) {
    var possibleUpper = genratedPassword[index];
    console.log(possibleUpper);
    if (possibleUpper == "A" || possibleUpper == "B" || possibleUpper == "C" || possibleUpper == "D" || possibleUpper == "E" || possibleUpper == "F" || possibleUpper == "G" || possibleUpper == "H" || possibleUpper == "I" || possibleUpper == "J" || possibleUpper == "K" || possibleUpper == "L" || possibleUpper == "M" || possibleUpper == "N" || possibleUpper == "O" || possibleUpper == "P" || possibleUpper == "Q" || possibleUpper == "R" || possibleUpper == "S" || possibleUpper == "T" || possibleUpper == "U" || possibleUpper == "V" || possibleUpper == "W" || possibleUpper == "X" || possibleUpper == "Y" ||possibleUpper == "Z") {
      verifiedUpper = true;
    }
  }
  if (verifiedUpper === false) {
    console.log("No uppercase letters!");
    passVerify();
  }
}

console.log("Generated password: ", genratedPassword);
  return genratedPassword;
};

document.getElementById("generate").addEventListener("click", () => {
  passPrompt();
  var newPassword = passVerify();
  document.getElementById("password").innerHTML = newPassword;
});
