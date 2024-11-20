let selectedParts = {
    head: ''
}

// When click on the image.
const clickableImages = document.querySelectorAll('.clickable-image')

clickableImages.forEach(img => {
    img.addEventListener('click', function() {
        const part = this.getAttribute('data-part')  // Get selected value from data-part.

        // Update the values ​​of the selected part.
        const partType = this.closest('.option').id  // Find the ID of the selected part (ex. head).
        selectedParts[partType] = part

        // Remove selection from other images & add selection to the clicked image.
        document.querySelectorAll(`#${partType} .clickable-image`).forEach(image => {
            image.classList.remove('selected')  // Cancel Selection
        })
        this.classList.add('selected')  // Select image

        // Show selected Hangman.
        displayHangmanCharacter()
    })
})

// Function to display selected Hangman.
function displayHangmanCharacter() {
    if (selectedParts.head) {
        const hangmanCharacter = `<img src="img/${selectedParts.head}.png" alt="${selectedParts.head}">`
        document.getElementById('hangman-character').innerHTML = hangmanCharacter
    }
}

// Game start function when pressing the "Start Game" button.
document.getElementById('start-game').addEventListener('click', function() {
    // Get player name
    const playerName = document.getElementById('player-name').value.trim()

    // Check if the player has entered their name.
    if (!playerName) {
        alert("Ange ditt namn!")
        return
    }

    // Check if the player has selected Hangman.
    if (!selectedParts.head) {
        alert("Välj Hangman!")
        return
    }

    // If the player enters their name & selects Hangman
    console.log(`Välkomna, ${playerName}! Startar spel...`)
    console.log(`Din Hangman: ${selectedParts.head}`)
})
