var letter = require("./letter");

//word constructor
function Word(ranWord){
//function that returns string
this.ranWord = ranWord;
console.log(ranWord)
this.wordArr = [];
this.makeWord = function() {
    for (var i = 0; i < ranWord.length; i++){
        var character = new Letter(ranWord[i])
        this.wordArr.push(character)
    }
Word.makeWord()
}

}
Word("poop")

console.log(wordArr)
module.exports = Word