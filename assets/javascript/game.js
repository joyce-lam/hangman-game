
var wordList = ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burma", "burundi", "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "comoros", "croatia", "cuba", "curacao", "cyprus", "czechia", "denmark", "djibouti", "dominica", "ecuador", "egypt", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "motenegro", "morocco", "mozambique", "namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "samoa", "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "tunisia", "turkey", "turmenistan", "tuvalu", "uganda", "ukraine", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];




//set variables
var wins = 0;
var losses = 0;
var remainedGuesses = 15; 
var lettersGuessed = [];
var guessWord;
var underScore = "_ ";
var lettersRevealed = [];




// declare a function to find a word within the array
function randomWord () { 
	guessWord = wordList[Math.floor(Math.random()*wordList.length)];
	var lettersArray = [guessWord.split("")];
	console.log(guessWord);
	console.log(guessWord.length);
	console.log(lettersArray);
}

//declare a function to display the word as underscores
function genUnderscores() {
	for (var i = 0; i<guessWord.length; i++) {
		lettersRevealed.push(underScore);
		console.log(lettersRevealed);
	}
}



//declare a function to reset the game 
function resetGame() {
	remainedGuesses = 15;
	lettersGuessed = [];
	randomWord();
	genUnderscores();
	updateScore();
}

// declare a function which generates a string from an array by concatenation of the characters separated by spaces
function genLettersString(arr) {
	var string = '';
	for (var i = 0; i < arr.length; i++) {
		string += arr[i] + ' ';
	}
	console.log(string.length);
	return string
}

//declare a function for updating scores
function updateScore() {
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("numberguesses").innerHTML = remainedGuesses;
	document.getElementById("letters").innerHTML = lettersGuessed;

	string = genLettersString(lettersRevealed);
	console.log(string);

	document.getElementById("underscore").innerHTML = string;
}




window.onload = function() {
	resetGame();
	updateScore();
}
	

window.onkeydown = function(event) {
	var userGuess = event.key;

	remainedGuesses--;
	lettersGuessed.push(userGuess);


	


	for (var k = 0; k <guessWord.length; k++) {
		var letterInGuess = guessWord[k];
		if (userGuess=== letterInGuess) {
			lettersRevealed[k] = letterInGuess;
		}
	}


	if (remainedGuesses===0) {
			losses++;
			resetGame(); 
	}

	updateScore();
}


