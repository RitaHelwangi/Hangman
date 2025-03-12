
/* import { words } from "./svenska-ord.js";
import { initGame } from "./game.js"; */ 


//toggle vy


function showEndScreen(isWinner) {
	const win = document.querySelector('#win');
	const lose = document.querySelector('#lose');
	
	// Visa vinstskärmen om spelaren har vunnit
	if (isWinner) {
	  win.classList.remove('hidden');
	  lose.classList.add('hidden');
	} else { // Visa förlustskärmen om spelaren har förlorat
	  lose.classList.remove('hidden');
	  win.classList.add('hidden');
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
		hideViews()
		bodyStart.classList.remove('hide');    
	   
   
   // Flikar toggla mellan spelvyer
   document.querySelector('#start-flik').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-start').classList.remove('hide');
   });
   });
   document.querySelector('#game-wiew-flik').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-game').classList.remove('hide');
   });
   
   document.querySelector('#score-flik').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-score').classList.remove('hide');
   });
   
   function hideViews() {
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
   document.querySelector('#spela-igen-btn-lose').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-game').classList.remove('hide');
	   initGame()
   });
	   
   document.querySelector('#visa-poang-btn-lose').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-score').classList.remove('hide');
	   
   });
   
   document.querySelector('#visa-poang-btn-win').addEventListener('click', function() {
	   hideViews()
	   document.querySelector('#body-score').classList.remove('hide');
	   
   });
   
   // "Spela igen" knapp för vinnar-sidan
   document.querySelector('#spela-igen-btn-win').addEventListener('click', function() {
	   hideViews(); 
	   document.querySelector('#body-game').classList.remove('hide'); 
	   initGame();  
	 });
   
	 const gameUpdateLose = document.querySelector("#game-update-lose");
	 const gameUpdateWin = document.querySelector("#game-update-win");
	 
	 const theWordLose = document.createElement("p");
	 const theGuessLose = document.createElement("p");
	 const theWordWin = document.createElement("p");
	 const theGuessWin = document.createElement("p");
	 
	 // Hämta ordet och resultat från localStorage
	 const lastWord = localStorage.getItem('lastWord');
	 const lastIncorrectGuesses = localStorage.getItem('lastIncorrectGuesses');
	 const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
	 const lastGame = gameResults[gameResults.length - 1];
	 
	 if (lastGame) {
	   theWordLose.innerText = `Ordet var: ${lastWord}`;
	   theGuessLose.innerText = `Antal felaktiga gissningar: ${lastIncorrectGuesses}`;
	 
	   theWordWin.innerText = `Ordet var: ${lastWord}`;
	   theGuessWin.innerText = `Antal felaktiga gissningar: ${lastIncorrectGuesses}`;
	 
	   gameUpdateLose.appendChild(theWordLose);
	   gameUpdateLose.appendChild(theGuessLose);
	   gameUpdateWin.appendChild(theWordWin);
	   gameUpdateWin.appendChild(theGuessWin);
	 }

/*window.addEventListener('load', () => {   
	 const bodyStart = document.querySelector('#body-start');    
	 const bodyGame = document.querySelector('#body-game');    
	 const bodyScore = document.querySelector('#body-score'); 
	 const win = document.querySelector('#win');
	 const lose = document.querySelector('#lose');  
	 hideViews()
	 bodyStart.classList.remove('hide');    
	

// Flikar toggla mellan spelvyer
document.querySelector('#start-flik').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-start').classList.remove('hide');
});
});
document.querySelector('#game-wiew-flik').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-game').classList.remove('hide');
});

document.querySelector('#score-flik').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-score').classList.remove('hide');
});

function hideViews() {
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
document.querySelector('#spela-igen-btn-lose').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-game').classList.remove('hide');
	initGame()
});
	
document.querySelector('#visa-poang-btn-lose').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-score').classList.remove('hide');
	
});

document.querySelector('#visa-poang-btn-win').addEventListener('click', function() {
	hideViews()
	document.querySelector('#body-score').classList.remove('hide');
	
});

// "Spela igen" knapp för vinnar-sidan
document.querySelector('#spela-igen-btn-win').addEventListener('click', function() {
	hideViews(); 
	document.querySelector('#body-game').classList.remove('hide'); 
	initGame();  
  });

// sriva ut ordet + antal gissningar i win/lose


//dela upp win/lose
const gameUpdateLose = document.querySelector('#game-update-lose');
const gameUpdateWin = document.querySelector('#game-update-win');
const theWordLose = document.createElement('p');
const theGuessLose = document.createElement('p');
const theWordWin = document.createElement('p');
const theGuessWin = document.createElement('p');
let wordToGuess = ''; 
const guessInput = document.getElementById("guess-input");
let incorrectGuesses = []; 
const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");
const wordDisplay = document.getElementById("word-display");
let guessedLetters = [];

wordToGuess = getRandomWord();
handleGuess()
updateIncorrectGuesses();
updateWordDisplay()


console.log('Valt ord:', wordToGuess);

theWordLose.innerText = `Ordet var: ${wordToGuess}`;
theGuessLose.innerText = `Antal gissningar: ${incorrectGuesses.length}`;

theWordWin.innerText = `Ordet var: ${wordToGuess}`;
theGuessWin.innerText = `Antal gissningar ${incorrectGuesses.length}`;

gameUpdateLose.appendChild(theWordLose);
gameUpdateLose.appendChild(theGuessLose);
gameUpdateWin.appendChild(theWordWin);
gameUpdateWin.appendChild(theGuessWin);



// Get Random Word
function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)].toUpperCase();
  }
  
  // Update Word Display
function updateWordDisplay() {
	wordDisplay.textContent = wordToGuess
	  .split("")
	  .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
	  .join(" ");
	  console.log('word display: ', guessedLetters);
	  
  }
 
  // Update Incorrect Guesses
function updateIncorrectGuesses() {
	incorrectGuessesDisplay.textContent = incorrectGuesses.join(", ");
  }
  
 
  // Handle Guess
  function handleGuess() {
	const letter = guessInput.value.toUpperCase();
	guessInput.value = "";
  
	if (!letter || !/^[A-ZÅÄÖ]$/.test(letter)) {
	 // showCustomDialog("Vänligen skriv in en giltig bokstav.");
	  return;
	}
  
	if (guessedLetters.includes(letter) || incorrectGuesses.includes(letter)) {
	 // showCustomDialog("Du har redan gissat denna bokstav!");
	  return;
	}
  
	if (wordToGuess.includes(letter)) {
	  guessedLetters.push(letter);
	  console.log('gissade rätt');
	  
	} else {
	  incorrectGuesses.push(letter);
	  revealHangmanPart();
	  console.log('gissade fel', wordToGuess, letter);
	  
	}
} */


