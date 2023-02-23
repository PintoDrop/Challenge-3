let passLength;
let hasNumbers;
let hasUppercase;
let hasLowercase;
let hasSymbols;

const passPrompt = () => {
  passLength = parseInt(
    prompt(
      "How many characters would you like the password to be? Choose between 8 & 128"
    )
  );
  // console.log("Passowrd length " + passLength);
  hasNumbers = confirm("Would you like to include numbers?");
  // console.log("Number " + confirmNumber);
  hasUppercase = confirm("Would you like to include uppercase letters?");
  // console.log("Uppercase " + confirmUpper);
  hasLowercase = confirm("Would you like to include lowercase letters?");
  // console.log("Lowercase " + confirmLower);
  hasSymbols = confirm("Would you like to include special characters?");
  // console.log("Symbols " + confirmSpecial);

  console.log(passLength, hasNumbers, hasUppercase, hasLowercase, hasSymbols);
  if (isNaN(passLength) == true || passLength < 8 || passLength > 128);
  {
    alert("Password must be between 8 & 128 characters");
    // passPrompt();
  }
};

const passGenerate = () => {
  let lowerString = "abcdefghijklmnopqrstuvwxyz ";
  let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  let numString = "0123456789 ";
  let symbolString = "!@#$%^&*() ";
  let chosenString = "";
  let password = "";

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

  for (let index = 0; index < passLength; index++) {
    let randomIndex = Math.floor(Math.random() * chosenString.length);
    // console.log(randomIndex)
    let randomChar = chosenString[randomIndex];
    console.log(randomChar);
    password = password + randomChar;
  }
  console.log(password);
  return password;
};

let tentativePassword;
const passVerify = () => {
  tentativePassword = passGenerate();
  if (hasLowercase) {
    let verifiedLower = false;
    for (let index = 0; index < passLength; index++) {
      let possibleLower = tentativePassword[index];
      console.log(possibleLower);
      if (
        possibleLower == "a" || possibleLower == "b" || possibleLower == "c" || possibleLower == "d" || possibleLower == "e" ||
        possibleLower == "f" || possibleLower == "g" || possibleLower == "h" || possibleLower == "i" || possibleLower == "j" || possibleLower == "k" || possibleLower == "l" || possibleLower == "m" || possibleLower == "n" || possibleLower == "o" || possibleLower == "p" || possibleLower == "q" || possibleLower == "r" || possibleLower == "s" || possibleLower == "t" || possibleLower == "u" ||
        possibleLower == "v" || possibleLower == "w" || possibleLower == "x" || possibleLower == "y" || possibleLower == "z"
      ) {
        verifiedLower = true;
      }
    }
    if (verifiedLower === false) {
      console.log("no lowercase characters!");
      passVerify();
    }
  }

  if (hasSymbols) {
    let verifiedSpecChars = false;
    for (let index = 0; index < passLength; index++) {
      let possibleSpec = tentativePassword[index];
      // console.log(possibleSpec)
      if (
        possibleSpec == "!" ||
        possibleSpec == "@" ||
        possibleSpec == "#" ||
        possibleSpec == "$" ||
        possibleSpec == "%" ||
        possibleSpec == "^" ||
        possibleSpec == "&" ||
        possibleSpec == "*" ||
        possibleSpec == "(" ||
        possibleSpec == ")"
      ) {
        verifiedSpecChars = true;
      }
    }
    if (verifiedSpecChars === false) {
      console.log("no spec characters!");
      passVerify();
    }
  }
};
if (hasNumbers) {
  let verifiedNumbers = false;
  for (let index = 0; index < passLength; index++) {
    let possibleNumbers = tentativePassword[index];
    // console.log(possibleSpec)
    if (
      possibleNumbers == "1" || possibleNumbers == "2" || possibleNumbers == "3" || possibleNumbers == "4" || possibleNumbers == "5" ||
      possibleNumbers == "6" || possibleNumbers == "7" || possibleNumbers == "8" || possibleNumbers == "9" ||possibleNumbers == "0"
    ) {
      verifiedNumbers = true;
    }
  }
  if (verifiedNumbers === false) {
    console.log("No Numbers!");
    passVerify();
  }
}
if (hasUppercase) {
  let verifiedUpper = false;
  for (let index = 0; index < passLength; index++) {
    let possibleUpper = tentativePassword[index];
    console.log(possibleUpper);
    if (
      possibleUpper == "A" || possibleUpper == "B" || possibleUpper == "C" || possibleUpper == "D" ||possibleUpper == "E" || possibleUpper == "F" ||possibleUpper == "G" || possibleUpper == "H" || possibleUpper == "I" ||
      possibleUpper == "J" || possibleUpper == "K" || possibleUpper == "L" ||
      possibleUpper == "M" || possibleUpper == "N" || possibleUpper == "O" || possibleUpper == "P" || possibleUpper == "Q" || possibleUpper == "R" ||
      possibleUpper == "S" || possibleUpper == "T" || possibleUpper == "U" ||
      possibleUpper == "V" || possibleUpper == "W" || possibleUpper == "X" ||
      possibleUpper == "Y" || possibleUpper == "Z"
    ) {
      verifiedUpper = true;
    }
  }
  if (verifiedUpper === false) {
    console.log("No uppercase letters!");
    passVerify();
  }
}

document.getElementById("generate").addEventListener("click", () => {
  passPrompt();
  let newPassword = passVerify();
  console.log(newPassword);
  document.getElementById("password").innerHTML = newPassword;
});
