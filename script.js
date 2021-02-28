// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var lengthString = prompt("Enter the length of password", "min 8 - max 128");
  var length = +lengthString;
  // console.log(length);
  var lower = confirm("Do you want lowercase letters?");
  var upper = confirm("Do you want uppercase letters?");
  var number = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");

  if (length < 8 || length > 128) {
    passwordText = "Please enter a valid password length between 8 and 128";
    return passwordText;
  }
  
  passwordText = generatedP(
    lower,
    upper,
    number,
    special,
    length
  );
  console.log(typeof passwordText);
  return passwordText;
  
}
//generatedP
function generatedP(lower, upper, number, special, length) {
  var generatedPassword = "";

  const countedTypes = lower + upper + number + special;
  // console.log(countedTypes);

  const typesA = [{lower}, {upper}, {number}, {special}].filter (
    item => Object.values(item)[0]
  );

  // console.log(typesA);

  if (countedTypes === 0) {
    return "";
  }

  for (var i = 0; i < length; i += countedTypes) {
    typesA.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


function randomLower() {
  var lowerLetter = "abcdefghijklmnopqrstuvwxyz"
  return lowerLetter[Math.floor(Math.random()*lowerLetter.length)];
}


function randomUpper() {
  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperLetter[Math.floor(Math.random()*upperLetter.length)];
}


function randomNumber() {
  var myNumber = "0123456789"
  return myNumber[Math.floor(Math.random()*myNumber.length)];
}


function randomSpecial() {
  var mySpecial = "!@#$%^&*(){}[]=<>/,.|~?"
  return mySpecial[Math.floor(Math.random()*mySpecial.length)];
}

