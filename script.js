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
*/

function generate(){
  var length = parseInt(prompt('Desired Length'));
  var numbers = confirm('Numbers');
  var uppercase = confirm('Uppercase');
  var lowercase = confirm('Lowercase');
  var symbols = confirm('Symbols');

  
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
  var characters = '';
  let passwordArray = [];
  var passwordOptions = generate();
  
  if (passwordOptions.numbers === true){
    characters += '0123456789';
  }
  
  if (passwordOptions.uppercase === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }cccccccc
  
  if (passwordOptions.lowercase === true) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  
  if (passwordOptions.symbols === true) {
    characters += "!@#$%^&*()";
  }
  
  
  // Getting a random index out of an array. Need for loop that runs as many times as given
  
  while (passwordArray.length < length) {
    var characters=Math.floor(Math.random() * characters.length);
    
    if(!noDuplicates || !passwordArray.includes(character)){
      passwordArray.push(character);
    }
   }

   return passwordArray.join ('');
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
