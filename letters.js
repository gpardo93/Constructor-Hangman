//Control whether or not a letter appears as a "_" or as itself on-screen
exports.letters = letters;

function letters(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
}

letters.prototype.printInfo = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}