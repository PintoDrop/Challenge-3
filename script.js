// Assignment code here
/* var generateBtn = {
  password: "Cool",
};

var displayList = function ( ) {
  alert("Password: " + generateBtn.password);
};
displayList();

var password=document.getElementById("generate"); 

for (var i = 0; i < = passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber+1);
}

    document.getElementById("generate").value = password;
  }
  
  var passwordLength;
  var confirmLower;
  var confirmUpper;
  var confirmNumber;
  var confirmSpecial;
  var userChoices;

  var length = parseInt(prompt('Desired Length'));
  */
 
 function generate(){
   passwordLength = prompt("How many characters would you like the password to be? Choose between 8 & 128")
   console.log("Passowrd length" + passwordLength);

   if (!passwordLength) {
     alert("Required value");
   } else if (passwordLength < 8 || passwordLength > 128);
   
   var numbers = confirm('Numbers');
   console.log("Number " + confirmNumber);

   var uppercase = confirm('Uppercase');
   console.log("Uppercase" + confirmUpper);

   var lowercase = confirm('Lowercase');
   console.log("Lowercase" + confirmLower);

   var symbols = confirm('Symbols');
   console.log("Symbols" + confirmSpecial);

  
  var passwordOptions = {
    length,
    numbers,
    uppercase,
    lowercase,
    symbols,
  };

  return passwordOptions;
}
function generatePassword() {
  var characters = "";
  let passwordArray = [];
  var passwordOptions = generate();

  if (passwordOptions.numbers === true) {
    characters += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }

  if (passwordOptions.uppercase === true) {
    characters += [
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
  }

  if (passwordOptions.lowercase === true) {
    characters += ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }

  if (passwordOptions.symbols === true) {
    characters += ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  }

  // Getting a random index out of an array. Need for loop that runs as many times as given

  while (passwordArray.length < length) {
    var characters = Math.floor(Math.random() * characters.length);

    if (!noDuplicates || !passwordArray.includes(character)) {
      passwordArray.push(character);
    }
  }

  return passwordArray.join("");
}
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowercase = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpper();
};

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

