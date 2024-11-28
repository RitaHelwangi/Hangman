import { words } from "./svenska-ord.js";


// DOM Elements
const wordDisplay = document.getElementById("word-display");
const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const spelaIgenBtn = document.getElementById("spela-igen-btn");
const visaPoangBtn = document.getElementById("visa-poang-btn");
const hangmanFigure = document.querySelector(".hangman-figure");

// Hangman parts

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
const maxIncorrectGuesses = hangmanParts.length;

// Initialize Game
function initGame() {
  wordToGuess = getRandomWord();
  guessedLetters = [];
  incorrectGuesses = [];
  updateWordDisplay();
  updateIncorrectGuesses();
  resetHangman();
  guessInput.disabled = false;
  guessButton.disabled = false;
}

// Get Random Word
function getRandomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
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
	saveGameResult(true);
    showCustomDialog("Grattis! Du gissade ordet!");
    initGame();
  } else if (incorrectGuesses.length >= maxIncorrectGuesses) {
	saveGameResult(false);
    showCustomDialog(`Du förlorade! Ordet var: ${wordToGuess}`);
    initGame();
  }
}

// Update Word Display
function updateWordDisplay() {
  wordDisplay.textContent = wordToGuess
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
}

// Update Incorrect Guesses
function updateIncorrectGuesses() {
  incorrectGuessesDisplay.textContent = incorrectGuesses.join(", ");
}

// Reveal Hangman Part
function revealHangmanPart() {
  const part = hangmanParts[incorrectGuesses.length - 1];
  if (part) part.style.visibility = "visible";
}

// Reset Hangman
function resetHangman() {
  hangmanParts.forEach((part) => {
    part.style.visibility = "hidden";
  });
}

// Check Win Condition
function checkWin() {
  return wordToGuess.split("").every((letter) => guessedLetters.includes(letter));
}

// Show Custom Dialog
function showCustomDialog(message) {
  const dialog = document.createElement("div");
  dialog.classList.add("custom-dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <button id="close-dialog">OK</button>
  `;
  document.body.appendChild(dialog);

  const closeButton = document.getElementById("close-dialog");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(dialog);
  });
}

  // Save Game Result

  //Mickan lagt till för att spara ner allt till score.
function saveGameResult(didWin) {
	// Hämta spelarens namn från start-sidan
  const playerName = localStorage.getItem("playerName") || "Spelare"; // Fallback if no name
  // Skapa resultatobjektet
  const result = {
    name: playerName,//hämtar namn från start
    incorrectGuesses: incorrectGuesses.length,
    wordLength: wordToGuess.length,
    time: new Date().toISOString(),
    guessedCorrectly: didWin,
  };
 // Hämta tidigare resultat från localStorage
  const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
  gameResults.push(result);
  localStorage.setItem("gameResults", JSON.stringify(gameResults));
}

  // input and button
 //document.getElementById('guess-input').disabled = false;
 //document.getElementById('guess-btn').disabled = false;
 //document.getElementById('guess-input').value = '';  // Clear the input field
 


// Event Listeners
guessButton.addEventListener("click", handleGuess);
spelaIgenBtn.addEventListener("click", initGame); // Reset game on 'spela igen'
visaPoangBtn.addEventListener("click", () => {
  const results = JSON.parse(localStorage.getItem("gameResults")) || [];
  const resultsMessage = results
    .map(
      (result) =>
        `${result.name}: ${result.wordLength} bokstäver, ${
          result.incorrectGuesses
        } fel (${result.guessedCorrectly ? "Vann" : "Förlorade"})`
    )
    .join("\n");

  showCustomDialog(resultsMessage || "Inga resultat att visa ännu.");
});

// Start Game
initGame();
