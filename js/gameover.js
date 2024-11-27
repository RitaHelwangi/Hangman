
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

//flikar - toggla vyer

document.querySelector('#game-wiew-flik').addEventListener('click', function() {
	document.querySelector('#game-wiew').classList.remove('hidden');
    document.querySelector('#game-wies').classList.add('hidden');
});

document.querySelector('#score-flik').addEventListener('click', function() {
	document.querySelector('score-container').classList.remove('hidden');
    document.querySelector('score-container').classList.add('hidden');
});

document.querySelector('#start-flik').addEventListener('click', function() {
	document.querySelector('lose').classList.remove('hidden');
    document.querySelector('win').classList.add('hidden');
});
