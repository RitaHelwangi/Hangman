
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

/*document.querySelector('#game-wiew-flik').addEventListener('click', function() {
	document.querySelector('#game-wiew').classList.remove('hide');
    document.querySelector('#game-wiew').classList.add('hide');
});

document.querySelector('#score-flik').addEventListener('click', function() {
	document.querySelector('score-container').classList.remove('hide');
    document.querySelector('score-container').classList.add('hide');
});

document.querySelector('#start-flik').addEventListener('click', function() {
	document.querySelector('lose').classList.remove('hide');
    document.querySelector('win').classList.add('hide');
}); */

document.querySelector('#start-flik').addEventListener('click', function() {
    const bodyStart = document.querySelector('#body-start'); 
    if (bodyStart.classList.contains('hide')) {
        bodyStart.classList.remove('hide'); // Ta bort hide för att visa
    } else {
        bodyStart.classList.add('hide'); // Lägg till hide för att dölja
    }
});

document.querySelector('#game-wiew-flik').addEventListener('click', function() {
    const bodyGame = document.querySelector('#body-game'); 
    if (bodyGame.classList.contains('hide')) {
        bodyGame.classList.remove('hide'); // Ta bort hide för att visa
    } else {
        bodyGame.classList.add('hide'); // Lägg till hide för att dölja
    }
});

document.querySelector('#score-flik').addEventListener('click', function() {
    const bodyScore = document.querySelector('#body-score'); 
    if (bodyScore.classList.contains('hide')) {
        bodyScore.classList.remove('hide'); // Ta bort hide för att visa
    } else {
        bodyScore.classList.add('hide'); // Lägg till hide för att dölja
    }
});
