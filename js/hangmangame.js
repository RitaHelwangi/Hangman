// Store the selected Avatar
let selectedAvatar = { head: '' }

// Create "EventListener" to all clickable Avatar images
document.querySelectorAll('.clickable-image').forEach(img => {
    img.addEventListener('click', function () {
        const avatar = this.getAttribute('data-part') // Get the value of the selected avatar
        selectedAvatar.head = avatar

        // Remove the "selected" class from all images 
        document.querySelectorAll('.clickable-image').forEach(image => {
        image.classList.remove('selected')})

        // Add "selected" to the clicked image
        this.classList.add('selected')

        // Show the selected character
        displayAvatarCharacter()

        // Check the display of the Finish button
        checkFinishButton()
    })
})

// Function to show the selected Avatar
function displayAvatarCharacter() {
    if (selectedAvatar.head) {
        const avatarHTML = `<img src="img/${selectedAvatar.head}.png" alt="${selectedAvatar.head}">`
        document.getElementById('avatar-character').innerHTML = avatarHTML
    }
}

// Function to check display of Finish button.
function checkFinishButton() {
    const playerName = document.getElementById('player-name').value.trim()
    const finishButton = document.getElementById('finish')

    // Show Finish button when user enters name and selects Avatar.
    finishButton.style.display = (playerName && selectedAvatar.head) ? 'inline-block' : 'none'
}

// When click "Finish" button
document.getElementById('finish').addEventListener('click', function () {
    const playerName = document.getElementById('player-name').value.trim()

    // Showing message after clicking "Finish" button.
    const messageDiv = document.getElementById('game-message')
    if (playerName && selectedAvatar.head) {
        messageDiv.innerHTML = 
            `<p>Välkommen, ${playerName}! Ditt val är klart.</p>
            <p>Du har valt Avatar: ${selectedAvatar.head}</p>`
    }
})

// Function to show a notification message on display
function showDialog(message) {
    const dialog = document.getElementById('dialog')
    document.getElementById('dialog-message').textContent = message
    dialog.showModal()
}

// Hide dialog when close button is pressed
document.getElementById('dialog-close').addEventListener('click', function () {
    document.getElementById('dialog').close()
})

// When click "Start" button
document.getElementById('start-game').addEventListener('click', function () {
    const playerName = document.getElementById('player-name').value.trim()

    // Check if the player has entered their name yet
    if (!playerName) {
        showDialog("Skriv in ditt namn!") // Alert & show a message if the players didn't in put their names
        return
    }

    // Check if the player has selected Avatar yet
    if (!selectedAvatar.head) {
        showDialog("Välj Avatar!") // Alert & show a message if the players didn't choose their Avatars
        return
    }

    // Show player's name and avatar when start game
    console.log(`Välkommen: ${playerName}! Spelet startar...`)
    console.log(`Du har valt Avatar: ${selectedAvatar.head}`)
    window.location.href = "start.html"
})






