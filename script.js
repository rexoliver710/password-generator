// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberarray = ["1","2","3","4","5","6","7","8","9","0"]
var letterarray = ["A","B","C","D","E","F","G","H","I","J,","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialcharacters = ["%","*","#","@","$"]
var possiblearray = []
var finalresult = []
var guararray = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("How many characters do you want in your password?")

  if(passwordLength<8 || passwordLength>128){
    alert("password must be between 8 and 128")
    return
  }

  var lowercase = confirm("do you want lowercase letters?")
  var uppercase = confirm("do you want uppercase letters?")
  var numbers = confirm("do you want numbers?")
  var special = confirm("do you want special characters?")

  if(lowercase===false || uppercase===false || numbers===false || special===false){
    alert("must select at least one character type")
    return 
  }
  if(uppercase===true){
    possiblearray = possiblearray.concat(letterarray)
  }

  if(numbers===true){
    possiblearray = possiblearray.concat(numberarray)
  }

  if(special===true){
    possiblearray = possiblearray.concat(specialcharacters)
    console.log(possiblearray)
  }

  for (let index = 0; index < passwordLength; index++) {
    const element = passwordLength[index];
    var randomcharacter = random(possiblearray)
    finalresult.push(randomcharacter)
  }
  return finalresult.join("")
}

function random(array){
  var index = Math.floor(Math.random()* array.length)
  var element = array[index]
  return element
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
