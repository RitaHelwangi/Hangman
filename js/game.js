// List of words "EDIT LATER!"
const wordList = [
  "JAVASCRIPT", "PROGRAMMING", "DEVELOPER", "HANGMAN", "CODING",
  "SOFTWARE", "ALGORITHM", "DEBUGGING", "FUNCTION", "VARIABLE"
];

// DOM Elements
const wordDisplay = document.getElementById("word-display");
const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const hangmanParts = [
  document.getElementById("head"),
  document.getElementById("body"),
  document.getElementById("arms"),
  document.getElementById("legs"),
  document.getElementById("scaffold"),
  document.getElementById("ground")
];

// Variables
let wordToGuess = ''; 
let guessedLetters = [];
let incorrectGuesses = []; 
const maxIncorrectGuesses = 6;


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

