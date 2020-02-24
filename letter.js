

//letter constructor
function Letter(character) {
    //string value to store character for letter
    this.character = character;
    //boolean value to check if letter has been guessed
    this.letterMatch = false;
    //function that returns all letters that are guessed correctly, otherwise print _
    this.render = function () {
        if (this.character === " ") {
            return " ";
        }
        else if (!this.letterMatch) {
            return "_";
        }
        else {
            return this.character;
        }

    }
    //function that checks guessed character matches with character in actual word, and updating boolean value if its true
    this.letterCheck = function (userGuess) {
        if (userGuess === this.character) {
            this.letterMatch = true
        }
    }
}

module.exports = Letter;