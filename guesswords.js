//Random word is selected and exported
var wordsToGuess = ["Prada, Fendi, Givenchy"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;