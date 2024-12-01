import { updateIncorrectGuesses } from './game.js';
import { words } from "./svenska-ord.js";


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
	//const win = document.querySelector('#win');
	//const lose = document.querySelector('#lose');
	bodyStart.classList.add('hide')
	bodyGame.classList.add('hide')
	bodyScore.classList.add('hide')
	//win.classList.add('hidden');
	//lose.classList.add('hidden');
	
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

// sriva ut ordet + antal gissningar i win/lose

// Skapa ett div-element för spelets uppdateringar
//const gameUpdate = document.createElement('div');
//document.querySelector('.game-update')
//gameUpdate.classList.add('game-update'); // Ändrat till classList.add för korrekt användning

// Skapa ett p-element för att visa meddelandet
//const p = document.createElement('p');

// Sätt textinnehållet till att visa ordet och antalet felaktiga gissningar
//p.innerText = `Ordet var: ${word}. Du gissade fel ${incorrectGuesses} gånger.`;

// Lägg till p-elementet i gameUpdate-diven
//gameUpdate.appendChild(p);


/*const gameUpdate = document.createElement('div');
gameUpdate.classList('game-update')
const p = document.createElement('p')
p.innerText = `textContent = Ordet var: ${word} Du gissade fel ${incorrectGuesses} gånger.`;

gameUpdate.appendChild(p);*/


// Skapa en övergripande div för spelets uppdateringar
///const gameContainer = document.createElement('div');
//gameContainer.classList.add('game-container'); // Behöver för att kunna styla hela behållaren

// Skapa ett div-element för spelets uppdateringar
//const gameUpdate = document.createElement('div');
//gameUpdate.classList.add('game-update'); 

//dela upp win/lose
const gameUpdateLose = document.querySelector('.game-update-lose');
const gameUpdateWin = document.querySelector('.game-update-win');
const theWordLose = document.createElement('p');
const theGuessLose = document.createElement('p');
const theWordWin = document.createElement('p');
const theGuessWin = document.createElement('p');
let wordToGuess = ''; 
wordToGuess = getRandomWord();
let incorrectGuesses = []; 
//updateWordDisplay();
updateIncorrectGuesses();

theWordLose.innerText = `Ordet var: ${wordToGuess}`;
theGuessLose.innerText = `Antal gissningar ${incorrectGuesses.length}`;

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
  /*function updateIncorrectGuesses() {
	incorrectGuessesDisplay.textContent = incorrectGuesses.join(", ");
  } */
  
  // Handle Guess
  function handleGuess() {
	const letter = guessInput.value.toUpperCase();
	guessInput.value = "";
  
	if (!letter || !/^[A-ZÅÄÖ]$/.test(letter)) {
	  showCustomDialog("Vänligen skriv in en giltig bokstav.");
	  return;
	}
  
	if (guessedLetters.includes(letter) || incorrectGuesses.includes(letter)) {
	  showCustomDialog("Du har redan gissat denna bokstav!");
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
}