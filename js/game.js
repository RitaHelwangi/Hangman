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

// Initialize Game
function initGame() {
  wordToGuess = getRandomWord();
  guessedLetters = [];
  incorrectGuesses = [];
  updateWordDisplay();
  updateIncorrectGuesses();
  resetHangman();
}

// Get Random Word
function getRandomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

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
  } else {
    incorrectGuesses.push(letter);
    revealHangmanPart();
  }

  updateWordDisplay();
  updateIncorrectGuesses();

  if (checkWin()) {
    showCustomDialog("Grattis! Du gissade ordet!");
    initGame();
  } else if (incorrectGuesses.length >= maxIncorrectGuesses) {
    showCustomDialog(`Du förlorade! Ordet var: ${wordToGuess}`);
    initGame();
  }
}

  
  // input and button
  document.getElementById('guess-input').disabled = false;
  document.getElementById('guess-btn').disabled = false;
  document.getElementById('guess-input').value = '';  // Clear the input field



document.addEventListener("DOMContentLoaded", () => {
	initializeGame();
});

