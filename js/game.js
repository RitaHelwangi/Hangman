// Object to store the selected Avatar
let selectedAvatar = {
    head: '', // Property to store the selected head avatar
}

// Create "EventListener" to all clickable Avatar images
const clickableImages = document.querySelectorAll('.clickable-image')

clickableImages.forEach(img => {
    img.addEventListener('click', function() {
        const avatar = this.getAttribute('data-part')  // Get the value of the selected avatar 

        // Update the selected avatar in "selectedAvatar" object
        selectedAvatar.head = avatar

        // Remove the "selected" class from all images 
        document.querySelectorAll('.clickable-image').forEach(image => {
            image.classList.remove('selected')  // Deselect/remove images 
        })

        // Add "selected" to the clicked image
        this.classList.add('selected')  

        // Show the selected character 
        displayAvatarCharacter()
    })
})

// Function to display the selected Avatar
function displayAvatarCharacter() {
    if (selectedAvatar.head) {
        const avatarHTML = `<img src="img/${selectedAvatar.head}.png" alt="${selectedAvatar.head}">`;
        document.getElementById('avatar-character').innerHTML = avatarHTML;
    }
}

// Function to start the game when the "Start Game" button is pressed
document.getElementById('start-game').addEventListener('click', function() {
    // Get player names
    const playerName = document.getElementById('player-name').value.trim() // Get the player's name

    // Check if the player has entered their name yet
    if (!playerName) {
        alert("Skriv in ditt namn!") // Alert if the players didn't in put their names
        return
    }

    // Check if the player has selected Avatar yet
    if (!selectedAvatar.head) {
        alert("Välj Avatar!") // Alert if the players didn't choose their Avatars
        return
    }

    // Show player's name and avatar when start game
    console.log(`Välkommen, ${playerName}! Spelet startar...`)
    console.log(`Du har valt Avatar: ${selectedParts.head}`)
}) 