//////////////////////////////DOM-Elements///////////////////////////////

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

///////////////////////////Generators-Object/////////////////////////////

//Assigning generators to keys
const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial
};

////////////////////////////////Checker///////////////////////////////////

function generatePassword() {
  var lengthString = prompt("   Please enter the length of password\n(Minimum 8 - Maximum 128 Characters)");
  var length = +lengthString; // Converting string length to number
  var lower = confirm("Do you want lowercase letters?");
  var upper = confirm("Do you want uppercase letters?");
  var number = confirm("Do you want numbers?");
  var special = confirm("Do you want special characters?");
  if (length < 8 || length > 128) {
    passwordText = "Please enter a valid password length between 8 and 128";
    return passwordText;
  }
  passwordText = generatedP( // Passing Values to Generator
    lower,
    upper,
    number,
    special,
    length
  );
  // console.log(typeof passwordText);
  return passwordText;
}

/////////////////////////////Final-Generator/////////////////////////////////

function generatedP(lower, upper, number, special, length) {
  var generatedPassword = "";
  //Counting types
  const countedTypes = lower + upper + number + special;
  //Filtering out false results of types
  const typesA = [{lower}, {upper}, {number}, {special}].filter (
  function (item) { 
  return Object.values(item)[0]
  });
  //Returning nothing if nothing is checked
  if (countedTypes === 0) {
    return "";
  }
  //Looping over length & generating values for each type
  for (var i = 0; i < length; i += countedTypes) {
    typesA.forEach(
      function (type) {
      const funcName = Object.keys(type)[0];//Receiving the key value
      generatedPassword += randomFunc[funcName]();//Assiging key values to empty string
    });
  }
  const finalPassword = generatedPassword.slice(0, length); //Removing every value but length
  return finalPassword;
}

//////////////////////////////Generators/////////////////////////////////

// Lowercase generator
function randomLower() {
  var lowerLetter = "abcdefghijklmnopqrstuvwxyz"
  return lowerLetter[Math.floor(Math.random()*lowerLetter.length)];
}

// Uppercase generator
function randomUpper() {
  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return upperLetter[Math.floor(Math.random()*upperLetter.length)];
}

// Number generator
function randomNumber() {
  var myNumber = "0123456789"
  return myNumber[Math.floor(Math.random()*myNumber.length)];
}

// Special character generator
function randomSpecial() {
  var mySpecial = "!@#$%^&*(){}[]=<>/,.|~?"
  return mySpecial[Math.floor(Math.random()*mySpecial.length)];
}

///////////////////////////Text-Area-Refresher/////////////////////////////

function refreshP() {
  document.querySelector("#password").value = "";
}
window.onload = refreshP;

