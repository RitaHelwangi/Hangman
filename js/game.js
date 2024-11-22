let secretWord = ''; 
let guessedLetters = [];
let incorrectGuesses = []; 

// List of words "EDIT LATER!"
const words = ['javascript', 'python', 'html', 'css', 'nodejs', 'react'];

function initializeGame() {
  // Pick a random word from the list
  secretWord = words[Math.floor(Math.random() * words.length)];

  guessedLetters = [];
  incorrectGuesses = [];
  
  updateWordDisplay();
  updateIncorrectGuesses();
  
  // input and button
  document.getElementById('guess-input').disabled = false;
  document.getElementById('guess-btn').disabled = false;
  document.getElementById('guess-input').value = '';  // Clear the input field
}


document.addEventListener("DOMContentLoaded", () => {
	initializeGame();
});

