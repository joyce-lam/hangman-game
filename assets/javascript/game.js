
var wordList = ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burma", "burundi", "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "comoros", "croatia", "cuba", "curacao", "cyprus", "czechia", "denmark", "djibouti", "dominica", "ecuador", "egypt", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "motenegro", "morocco", "mozambique", "namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "samoa", "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "tunisia", "turkey", "turmenistan", "tuvalu", "uganda", "ukraine", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];





var wins = 0;
var losses = 0;
var remainedGuesses = 15; 
var lettersGuessed = [];
var guessWord;
var letterInGuess;
var underScore;

function randomWord () { 
	guessWord = wordList[Math.floor(Math.random()*wordList.length)];
}




function compareAnswer () {
	if (userGuess === letterInGuess) {
		wins ++;
		resetGame();
	} else if (remainedGuesses===0) {
		losses++;
		resetGame();
	}
} 

function resetGame () {
	remainedGuesses;
	lettersGuessed= [];
	guessWord = randomWord();
}


function updateScore () {
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("numberguesses").innerHTML = remainedGuesses;
	document.getElementById("letters").innerHTML = lettersGuessed;
}




window.onload = function () {
	resetGame();
	updateScore();
	showUnderscore();
}

window.onkeydown = function(event) {
	var userGuess = event.key;

	remainedGuesses--;
	lettersGuessed.push(userGuess);

	for (var j = 0; j <guessWord.length; j++) {
	letterInGuess = guessWord[j];
	compareAnswer();
	}

	updateScore();

}




