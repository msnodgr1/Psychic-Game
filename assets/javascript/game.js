
var randletters = ["a", "b", "c", "d", "e", "f", "g", "h",
	"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
	"t", "u", "v", "w", "x", "y", "z"]

var chosenLetter = randletters[Math.floor(Math.random()*randletters.length)];

var psychic = {
	wins: 0,
	loss: 0,
	guesses: 10,
	letters: "",

	


	winCounter: function(){
		this.wins = this.wins + 1;
		document.getElementById("wins").innerHTML = "Wins: " + this.wins;
	},
	lossCounter: function(){
		this.loss = this.loss + 1;
		document.getElementById("losses").innerHTML = "Losses: " + this.loss;
	},
	guessCounter: function(){
		this.guesses = this.guesses - 1;
		document.getElementById("guessremain").innerHTML = "Guesses Left: " + this.guesses;
	},
	lettersUsed: function (){
		this.letters = this.letters + " " + event.key 
	}

};




	

document.onkeyup = function(event){
	var guess = event.key;
	
	psychic.guessCounter();
	psychic.lettersUsed();
	document.getElementById("lettersguessed").innerHTML = "Your Guesses So Far: " + psychic.letters;
	if (guess === chosenLetter) {
		psychic.winCounter();
		psychic.letters = "";
		psychic.guesses = 10;
		chosenLetter = randletters[Math.floor(Math.random()*randletters.length)];
	}
	else if(psychic.guesses< 1){
		psychic.lossCounter();
		psychic.letters = "";
		psychic.guesses = 10;
		chosenLetter = randletters[Math.floor(Math.random()*randletters.length)];
	}

};