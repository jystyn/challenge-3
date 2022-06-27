// declaring variables for different password characer types
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var specialCharacters = '!@#$%^&*()_+{}><?+-//[]~';

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //ask for password length between 8 and 128
  var length = prompt('Choose a password length between 8 and 128 characters');
  
    //Validate password length is between 8 and 128
    if (length <8 || length > 128) {
    alert('Please select a password length between 8 and 128');
    prompt('Choose a password length between 8 and 128 characters');
    }

    //convert value of length to an integer
    length = Number(length);

  //confirm character types added to password
  var chooseUppercase = confirm('Would you like to add uppercase letters?');
  var chooseLowercase = confirm('Would you like to add lowercase letters?');
  var chooseNumbers = confirm('Would you like to add numbers?');
  var chooseSpecialCharacters = confirm('Would you like to add special characters?');
   
    //Validate that at least one character type was chosen
    if(chooseUppercase === false && chooseLowercase === false && chooseNumbers === false && chooseSpecialCharacters === false){
    alert('You must choose at least one character type, please click the button and try again');
    }

  //string to save parts of password
  var passParts = '';

  //adding chosen characters to password string
  if(chooseUppercase){
    passParts += uppercase;
  }
  if(chooseLowercase){
    passParts += lowercase;
  }
  if(chooseNumbers){
    passParts += numbers;
  }
  if(chooseSpecialCharacters){
    passParts += specialCharacters;
  }
  //
  var passwordResult = '';

  for(var i = 0; i < length; i++){
    passwordResult += passParts[Math.floor(Math.random() * passParts.length)];
  }
  
  return passwordResult;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);