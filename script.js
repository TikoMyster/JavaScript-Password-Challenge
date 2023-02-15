// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var passwordLength = 10;
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function GeneratePassword(){
  let userInputLength = parseInt(prompt("Enter Length of Password (between 8-128)"))
  if (isNaN(userInputLength)){
    alert('Password can only be a number')
    return ' ';
  }
  let includeNumber = confirm('Would you like to include numbers? (OK means Yes, cancel means No)');
  let includeLowerCase = confirm('Would you like to include lowercase letters?');
  let includeUpperCase = confirm('Would you like to include uppercase letters?');
  let includeSpecialCharacter = confirm('Would you like to include special characters?');

  let passwordBuffer = [];
  let passwordResult = [];
  let types = [includeNumber, includeLowerCase, includeUpperCase, includeSpecialCharacter];
  let typeLists = [NumberList, lowercaseList, uppercaseList, charList]
  let countTypes = 0;
  if (!includeNumber && !includeLowerCase && !includeUpperCase && !includeSpecialCharacter) {
    alert('You must select at least one character type!');
  }
  for (let x=0; x< types.length; x++){
    if (type[x]) {
      let selection = [];
      countTypes++
      passwordBuffer = passwordBuffer.concat(typeLists[x]);
      selection.push(typeLists[x])[Math.floor(Math.random() * (typeLists[x].length))];
      passwordResult.push(selection);
    };
  };
  let numNeeded = userInputLength - countTypes;
  for (let x = 0; x < numNeeded; x++) {
    let random = Math.floor(Math.random() * (passwordBuffer.length))
    passwordResult.push(passwordBuffer[random]);
  };

  //shuffle the result so the order is not pre-determined
  let RandomPassword = passwordResult.sort(function () {
    return Math.random() - 0.5;
  });

  // join the items in the array a string
  return RandomPassword.join('')

  let NumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let lowercaseList = [];
  for (let x=0; x < 26; x++) {
    lowercaseList.push(String.fromCharCode(x + 97));
  }
  let uppercaseList = [];
  for (let x=0; x < lowercaseList.length; x++) {
    uppercaseList[x] = lowercaseList[x].toUpperCase();
  }
  let charList = [];
  for (let x=0; x < 15; x++) {
    charList.push(String.fromCharCode(x + 33));
  }
};

