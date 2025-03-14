import { words } from "./svenska-ord.js";

// DOM Elements
const wordDisplay = document.getElementById("word-display");
const incorrectGuessesDisplay = document.getElementById("incorrect-guesses");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
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
  document.getElementById("ground"),
];

// Variables
let wordToGuess = "";
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
  //guessButton.disabled = false;
}


// Get Random Word
//function getRandomWord() {
  //return words[Math.floor(Math.random() * words.length)].toUpperCase();
//}

// Hämta ett slumpmässigt ord från listan o spara det i localstorage
function getRandomWord() {
  const word = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log("Ordet som sparas i localStorage:", word); 
  localStorage.setItem("lastWord", word); 
  return word;
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
    console.log("gissade rätt");
  } else {
    incorrectGuesses.push(letter);
    revealHangmanPart();
    console.log("gissade fel", wordToGuess, letter);
  }

  updateWordDisplay();
  updateIncorrectGuesses();

  if (checkWin()) {
    /*showCustomDialog("Grattis! Du gissade ordet!");
    initGame();*/
    hideWiews();
    saveGameResult(true, wordToGuess);
    showEndScreen(true, wordToGuess);
  } else if (incorrectGuesses.length >= maxIncorrectGuesses) {
    /*showCustomDialog(`Du förlorade! Ordet var: ${wordToGuess}`);
    initGame();*/
    hideWiews();
    saveGameResult(false, wordToGuess);
    showEndScreen(false, wordToGuess);
  }
}

// Funktion för att visa slutskärmen (vinnande eller förlorande)
function showEndScreen(isWinner) {
	const win = document.querySelector("#win");
	const lose = document.querySelector("#lose");
  
	// Hämta ordet och antalet felaktiga gissningar från localStorage
	const wordToGuess = localStorage.getItem("lastWord");
	const incorrectGuesses = JSON.parse(localStorage.getItem("incorrectGuesses")) || [];
	const incorrectGuessesCount = incorrectGuesses.length;
  
	if (isWinner) {
	  win.classList.remove("hidden");
	  lose.classList.add("hidden");
  
	  document.querySelector("#game-update-win").innerHTML = `
		<p class="word-guesses">Ordet är: ${wordToGuess}</p>
		<p class="number-guess">Antal felaktiga gissningar: ${incorrectGuessesCount}</p>
	  `;
	} else {
	  lose.classList.remove("hidden");
	  win.classList.add("hidden");
  
	  document.querySelector("#game-update-lose").innerHTML = `
		<p class="word-guesses">Ordet var: ${wordToGuess}</p>
		<p class="number-guess">Antal felaktiga gissningar: ${incorrectGuessesCount}</p>
	  `;
	}
  }
function hideWiews() {
  const bodyStart = document.querySelector("#body-start");
  const bodyGame = document.querySelector("#body-game");
  const bodyScore = document.querySelector("#body-score");
  const win = document.querySelector("#win");
  const lose = document.querySelector("#lose");
  document.querySelector("#body-game").classList.add("hide");
  document.querySelector("#body-score").classList.add("hide");
  document.querySelector("#body-start").classList.add("hide");
  win.classList.add("hidden");
  lose.classList.add("hidden");
}

// Update Word Display
function updateWordDisplay() {
  wordDisplay.textContent = wordToGuess
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  console.log("word display: ", guessedLetters);
}

// Update Incorrect Guesses
function updateIncorrectGuesses() {
  incorrectGuessesDisplay.textContent = incorrectGuesses.join(", ");
  console.log("antal felaktiga gissningar:", incorrectGuesses);

  // Spara felaktiga gissningar i localStorage
  localStorage.setItem("incorrectGuesses", JSON.stringify(incorrectGuesses)); // Spara gissningarna som en JSON-sträng
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
  return wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
}

// Show Custom Dialog
function showCustomDialog(message) {
  const existingDialog = document.querySelector(".custom-dialog");
  if (existingDialog) {
    existingDialog.remove();
  }

  const dialog = document.createElement("div");
  dialog.classList.add("custom-dialog");
  dialog.innerHTML = `
    <p>${message}</p>
    <button id="close-dialog">OK</button>
  `;
  document.body.appendChild(dialog);

  const closeButton = document.getElementById("close-dialog");
  closeButton.addEventListener("click", () => {
    dialog.remove();
  });
}

function saveGameResult(isWin, wordToGuess) {
  const playerName = localStorage.getItem("playerName") || "Spelare";
  const selectedAvatar = localStorage.getItem("selectedAvatar") || "default-avatar";
  const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];

  const gameResult = {
    name: playerName,
    avatar: selectedAvatar,
    word: wordToGuess,
    wordLength: wordToGuess.length,
    incorrectGuesses: incorrectGuesses.length, // Sparar antalet felaktiga gissningar
    guessedCorrectly: isWin,
    time: new Date().toISOString(),
  };

  // Lägg till resultatet
  gameResults.push(gameResult);
  
  // Sparar i localStorage
  localStorage.setItem("gameResults", JSON.stringify(gameResults));
}





// input and button
//document.getElementById('guess-input').disabled = false;
//document.getElementById('guess-btn').disabled = false;
//document.getElementById('guess-input').value = '';  // Clear the input field

// Event Listeners
guessInput.addEventListener("input", handleGuess);
//guessButton.addEventListener("click", handleGuess);
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
let selectedParts = {
  head: "",
};

// When click on the image.
const clickableImages = document.querySelectorAll(".clickable-image");

clickableImages.forEach((img) => {
  img.addEventListener("click", function () {
    const part = this.getAttribute("data-part"); // Get selected value from data-part.

    // Update the values ​​of the selected part.
    const partType = this.closest(".option").id; // Find the ID of the selected part (ex. head).
    selectedParts[partType] = part;

    // Remove selection from other images & add selection to the clicked image.
    document
      .querySelectorAll(`#${partType} .clickable-image`)
      .forEach((image) => {
        image.classList.remove("selected"); // Cancel Selection
      });
    this.classList.add("selected"); // Select image

    // Show selected Hangman.
    displayHangmanCharacter();
  });
});

// Function to display selected Hangman.
function displayHangmanCharacter() {
  if (selectedParts.head) {
    const hangmanCharacter = `<img src="img/${selectedParts.head}.png" alt="${selectedParts.head}">`;
    document.getElementById("hangman-character").innerHTML = hangmanCharacter;
  }
}

// DETTA ÄR GAMLA KODEN, popup
// Game start function when pressing the "Start Game" button.
/*document.getElementById("start-game").addEventListener("click", function () {
  // Get player name
  const playerName = document.getElementById("player-name").value.trim();

  // Check if the player has entered their name.
  if (!playerName) {
    alert("Ange ditt namn!");
    return;
  }

  // Check if the player has selected Hangman.
  if (!selectedParts.head) {
    alert("Välj Hangman!");
    return;
  }

  // If the player enters their name & selects Hangman
  console.log(`Välkomna, ${playerName}! Startar spel...`);
  console.log(`Din Hangman: ${selectedParts.head}`);
}); */


// Game start function when pressing the "Start Game" button.
document.getElementById("start-game").addEventListener("click", function () {
  // Get player name
  const playerName = document.getElementById("player-name").value.trim();

  // Check if the player has entered their name.
  if (!playerName) {
    
    document.getElementById("error-message").textContent = "Ange ditt namn!";
    document.getElementById("error-message").style.display = "block"; 
    return;
  }

  console.log(`Välkomna, ${playerName}! Startar spel...`);
  console.log(`Din Hangman: ${selectedParts.head || 'Ingen avatar vald'}`);

});

export {initGame}