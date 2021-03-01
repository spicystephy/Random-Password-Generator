// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

//generatePassword will prompt user if they want a special character and the length.
//then it will create a password based on that input. the password will need to draw characters randomly from one of the concatenated arrays.
//the function will continue looping until length is satisfied

function generatePassword() {
  var concatArrays = upperCasedCharacters.concat(
    lowerCasedCharacters,
    specialCharacters,
    numericCharacters
  );

  var password = "";

  var passwordLength = prompt(
    "Enter a length, between 8 - 128, for your password."
  );
  if (passwordLength <= 7) {
    prompt("Choice of password length is too short. Must be at least 8.");
    return;
  } else if (passwordLength >= 129) {
    prompt("Choice of password length is too long. Must be a maximum of 128.");
    return;
  }
  var lowerCase = confirm(
    "If you would like to include lower-cased letters, click OK."
  );
  var upperCase = confirm(
    "If you would like to include capitalized letters, click OK."
  );
  var numericChar = confirm("If you would like to include numbers, click OK.");
  var specialChar = confirm(
    "If you would like to include special characters, click OK."
  );
  // console.log(passwordLength);
  while (password.length < +passwordLength) {
    if (lowerCase === true) {
      var randomLowerChar =
        lowerCasedCharacters[
          Math.floor(Math.random() * lowerCasedCharacters.length)
        ];
      password += randomLowerChar;
    }
    if (upperCase === true) {
      var randomUpperChar =
        upperCasedCharacters[
          Math.floor(Math.random() * upperCasedCharacters.length)
        ];
      password += randomUpperChar;
    }
    if (numericChar === true) {
      var randomNumberChar =
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
      password += randomNumberChar;
    }
    if (specialChar === true) {
      var randomSpecChar =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      password += randomSpecChar;
    }
  }

  return password;
}

// retrieves reference to the button from html with an id of generate
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

//adds event listener to the generate button
generateBtn.addEventListener("click", writePassword);

// Writes the password from generatePassword to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
