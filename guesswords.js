//Random word is selected and exported
var wordsToGuess = ["Prada", "Fendi", "Givenchy", "Brunello Cucinelli", "Celine", "Loewe", "MiuMiu", "Saint Laurent", "Burberry", "Dior", "Moncler", "Salvatore Ferragamo"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;

