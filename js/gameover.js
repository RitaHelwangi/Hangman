
//toggle vy


document.querySelector('.show-winner-btn').addEventListener('click', function() {
    // Visa vinnarsidan och dölja gameover-sidan
    document.querySelector('#win').classList.remove('hidden');
    document.querySelector('#lose').classList.add('hidden');
});

document.querySelector('.show-loser-btn').addEventListener('click', function() {
    // Visa gameover-sidan och dölja vinnarsidan
    document.querySelector('#lose').classList.remove('hidden');
    document.querySelector('#win').classList.add('hidden');
});

//boolean funcion win/lose
function showEndScreen(isWinner, word) {
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
	if (isWinner) {
		document.querySelector('#win').classList.remove('hidden');
    	document.querySelector('#lose').classList.add('hidden');
	} else  {
		document.querySelector('#lose').classList.remove('hidden');
    	document.querySelector('#win').classList.add('hidden');
	} 
	// Visa det vinnande ordet om det finns
    if (!isWinner && word) {
        lose.textContent = `Tyvärr, ordet var: ${word}`;
    }
}
	
	//anropa function
	showEndScreen()
    
// Exempel på hur du anropar funktionen
// showEndScreen(true, 'example'); // Anropa för en seger
// showEndScreen(false, 'example'); // Anropa för en förlust

// Flikar toggla mellan spelvyer
document.querySelector('#start-flik').addEventListener('click', function() {
    const bodyStart = document.querySelector('#body-start'); 
	const bodyGame = document.querySelector('#body-game'); 
	const bodyScore = document.querySelector('#body-score');
	document.querySelector('#body-start').classList.remove('hide');
    document.querySelector('#body-game').classList.add('hide');
	document.querySelector('#body-score').classList.add('hide');
});

document.querySelector('#game-wiew-flik').addEventListener('click', function() {
    const bodyStart = document.querySelector('#body-start'); 
	const bodyGame = document.querySelector('#body-game'); 
	const bodyScore = document.querySelector('#body-score');
	document.querySelector('#body-game').classList.remove('hide');
    document.querySelector('#body-start').classList.add('hide');
	document.querySelector('#body-score').classList.add('hide');
});

document.querySelector('#score-flik').addEventListener('click', function() {
    const bodyStart = document.querySelector('#body-start'); 
	const bodyGame = document.querySelector('#body-game'); 
	const bodyScore = document.querySelector('#body-score');
	document.querySelector('#body-score').classList.remove('hide');
    document.querySelector('#body-game').classList.add('hide');
	document.querySelector('#body-start').classList.add('hide');
});