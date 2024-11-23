// List of words used in the game ((10 letters) from svenska-ord.js)
const words = ["abdikation", "basmatiris", "controller", "daggdroppe"]

// Variables
let word, wordDisplay, wrongGuesses

function startNewGame() {
    // Select a random word from a list.
    word = words[Math.floor(Math.random() * words.length)]
    
    // Create _ for each character.
    wordDisplay = Array(word.length).fill("_").join(" ")
    wrongGuesses = []
    
    // Update display on screen
    document.getElementById("wordDisplay").textContent = wordDisplay
    document.getElementById("wrongGuesses").textContent = "Fel gissning: " + wrongGuesses.join(", ")
}

// Guessing function
function checkGuess() {
    let guess = document.getElementById("guessInput").value.toUpperCase()
    if (!guess || wrongGuesses.includes(guess) || !/[A-Z]/.test(guess)) return
    
    // If the guess is wrong, add it to the wrong guess list.
    if (!word.includes(guess)) {
        wrongGuesses.push(guess)
        document.getElementById("wrongGuesses").textContent = "Fel gissning: " + wrongGuesses.join(", ")
    }
    
    // Update the words
    let newWordDisplay = word.split("").map(letter => {
        return wrongGuesses.includes(letter) ? letter : "_"
    }).join(" ")
    wordDisplay = newWordDisplay;
    document.getElementById("wordDisplay").textContent = wordDisplay
    
    // Reset the guessing word
    document.getElementById("guessInput").value = ""
}

// Start new game
startNewGame()

// Add event listener 
document.getElementById("submitGuess").addEventListener("click", checkGuess)
document.getElementById("guessInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") checkGuess()
})
