var word = "hello"
var wordArr = word.split("")
console.log(wordArr)
var wordGuess = []
console.log("wordGuess is empty"+wordGuess)
function convert() {
    for (var x = 0; x<wordArr.length;x++){
        wordGuess.push("")
    }
}
convert()
console.log("wordGuess after conversion: " + wordArr.length)
console.log(wordGuess)
//letter constructor
function letter(character, letterMatch){
//string value to store character for letter
this.character=character
//boolean value to check if letter has been guessed
this.letterMatch=letterMatch
//function that returns all letters that are guessed correctly, otherwise print _
this.render = function(){
    for(var i=0;i<wordGuess.length;i++)  {
        if (this.letterMatch === "true") {
            wordGuess.push(this.character)
            } 
            else {
                wordGuess.push("_")
        }  
    }
}
//function that checks guessed character matches with character in actual word, and updating boolean value if its true
this.letterCheck = function (){
    //recursion to check ig guessed letter is in string
    var characterCount = wordGuess.length
    var counter = 0
    if (counter< characterCount) {

        lettercheck()
    }else{
        this.render()
    }
}
}