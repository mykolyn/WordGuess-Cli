const inquirer = require("inquirer");



var word = "hello"
var wordArr = word.split("")
console.log(wordArr)
var wordGuess = []
console.log("wordGuess is empty" + wordGuess)
function convert() {
    for (var x = 0; x < wordArr.length; x++) {
        wordGuess.push("")
    }
}
convert()
console.log("wordGuess after conversion: " + wordArr.length)
console.log(wordGuess)



function run(){
    inquirer.prompt([

        {
          type: "input",
          name: "userInput",
          message: "Guess a letter"
        }
      
      // After the prompt, store the user's response in a variable called location.
      ]).then(function(res) {
          console.log(res.userInput)
}

      )}
      run()