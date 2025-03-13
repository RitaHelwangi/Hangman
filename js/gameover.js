// Funktion för att visa slutskärmen (vinnande eller förlorande)
function showEndScreen(isWinner) {
	const win = document.querySelector("#win");
	const lose = document.querySelector("#lose");
  
	// Hämta ordet och antalet felaktiga gissningar från localStorage
	const wordToGuess = localStorage.getItem("lastWord");
	const incorrectGuesses = JSON.parse(localStorage.getItem("incorrectGuesses")) || [];
	const incorrectGuessesCount = incorrectGuesses.length;
  
	// Uppdaterar vinnande och förlorande sektionerna med ordet och antalet felaktiga gissningar
	if (isWinner) {
	  win.classList.remove("hidden");
	  lose.classList.add("hidden");
  
	  // Lägger till ordet och antal fel gissningar på vinnar-sidan
	  document.querySelector("#game-update-win").innerHTML = `
		<p class="word-guesses">Ordet är: ${wordToGuess}</p>
		<p class="number-guess">Antal felaktiga gissningar: ${incorrectGuessesCount}</p>
	  `;
	} else {
	  lose.classList.remove("hidden");
	  win.classList.add("hidden");
  
	  // Lägger till ordet och antal fel gissningar på förlorar-sidan
	  document.querySelector("#game-update-lose").innerHTML = `
		<p class="word-guesses">Ordet var: ${wordToGuess}</p>
		<p class="number-guess">Antal felaktiga gissningar: ${incorrectGuessesCount}</p>
	  `;
	}
  }
  
  window.addEventListener('load', () => {
	const bodyStart = document.querySelector('#body-start');
	const bodyGame = document.querySelector('#body-game');
	const bodyScore = document.querySelector('#body-score');
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
	
	hideViews();
	bodyStart.classList.remove('hide');
  
	// Flikarna togglar mellan spelvyer
	document.querySelector('#start-flik').addEventListener('click', function () {
	  hideViews();
	  document.querySelector('#body-start').classList.remove('hide');
	});
  
	document.querySelector('#game-wiew-flik').addEventListener('click', function () {
	  hideViews();
	  document.querySelector('#body-game').classList.remove('hide');
	});
  
	document.querySelector('#score-flik').addEventListener('click', function () {
	  hideViews();
	  document.querySelector('#body-score').classList.remove('hide');
	});
  });
  
  // Funktion för att dölja alla vyer
  function hideViews() {
	const bodyStart = document.querySelector('#body-start');
	const bodyGame = document.querySelector('#body-game');
	const bodyScore = document.querySelector('#body-score');
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
  
	bodyStart.classList.add('hide');
	bodyGame.classList.add('hide');
	bodyScore.classList.add('hide');
	win.classList.add('hidden');
	lose.classList.add('hidden');
  }
  
  // Spela igen och visa poäng buttons
  document.querySelector('#spela-igen-btn-lose').addEventListener('click', function () {
	hideViews();
	document.querySelector('#body-game').classList.remove('hide');
	initGame(); 
  });
  
  document.querySelector('#visa-poang-btn-lose').addEventListener('click', function () {
	hideViews();
	document.querySelector('#body-score').classList.remove('hide');
  });
  
  document.querySelector('#visa-poang-btn-win').addEventListener('click', function () {
	hideViews();
	document.querySelector('#body-score').classList.remove('hide');
  });
  
  
  document.querySelector('#spela-igen-btn-win').addEventListener('click', function () {
	hideViews();
	document.querySelector('#body-game').classList.remove('hide');
	initGame(); 
  });
  