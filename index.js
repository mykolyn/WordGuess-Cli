const inquirer = require("inquirer");

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