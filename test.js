var letters = require('./letters.js');

myLetter = new letters.letters('a');
console.log(myLetter);
console.log(myLetter.value);

var word = require('./words.js');

var myWord = new word.wordCons('Belle');
console.log(myWord);
console.log(myWord.value);
for(var i=0;i<myWord.value.length;i++){
	console.log(myWord.letters[i].value);
}

var game = require('./guesswords.js');

console.log(guesswords.randoWord);