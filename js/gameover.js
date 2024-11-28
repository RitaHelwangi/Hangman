
//toggle vy


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
	showEndScreen(true)
	showEndScreen(false)
    

window.addEventListener('load', () => {   
	 const bodyStart = document.querySelector('#body-start');    
	 const bodyGame = document.querySelector('#body-game');    
	 const bodyScore = document.querySelector('#body-score'); 
	 const win = document.querySelector('#win');
	 const lose = document.querySelector('#lose');  
	 hideWiews()
	 bodyStart.classList.remove('hide');    
	

// Flikar toggla mellan spelvyer
document.querySelector('#start-flik').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-start').classList.remove('hide');
});
});
document.querySelector('#game-wiew-flik').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-game').classList.remove('hide');
});

document.querySelector('#score-flik').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-score').classList.remove('hide');
});

function hideWiews() {
	const bodyStart = document.querySelector('#body-start'); 
	const bodyGame = document.querySelector('#body-game'); 
	const bodyScore = document.querySelector('#body-score');
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
	bodyStart.classList.add('hide')
	bodyGame.classList.add('hide')
	bodyScore.classList.add('hide')
	win.classList.add('hidden');
	lose.classList.add('hidden');
}

//spela igen och visa poäng buttons
document.querySelector('#spela-igen-btn').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-game').classList.remove('hide');
	
});
	
document.querySelector('#visa-poang-btn').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-score').classList.remove('hide');
	
});