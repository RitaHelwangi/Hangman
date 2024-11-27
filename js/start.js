// Declare the selectedAvatar variable.
let selectedAvatar = { head: '', difficulty: '' }

// Create "EventListener" to all clickable Avatar images.
document.querySelectorAll('.clickable-image').forEach(img => {
    img.addEventListener('click', function () {
        const avatar = this.getAttribute('data-part')
        selectedAvatar.head = avatar

        document.querySelectorAll('.clickable-image').forEach(image => image.classList.remove('selected'))
        this.classList.add('selected')

        displayAvatarCharacter()
        checkFinishButton()
    })
})

// EventListener for difficulty buttons.
;['easy', 'medium', 'hard'].forEach(difficulty => {
    document.getElementById(difficulty).addEventListener('click', function () {
        selectedAvatar.difficulty = difficulty
        document.querySelectorAll('.difficulty-buttons button').forEach(btn => btn.classList.remove('selected'))
        this.classList.add('selected')
        checkFinishButton()
    })
})

// Function to show the selected Avatar.
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
    finishButton.style.display = (playerName && selectedAvatar.head && selectedAvatar.difficulty) ? 'inline-block' : 'none'
}

// When click Finish button.
document.getElementById('finish').addEventListener('click', function () {
    const playerName = document.getElementById('player-name').value.trim()
    if (playerName && selectedAvatar.head && selectedAvatar.difficulty) {
        document.getElementById('game-message').innerHTML = `
            <p>Välkommen, ${playerName}! Ditt val är klart.</p>
            <p>Du har valt Avatar: ${selectedAvatar.head}</p>
            <p>Du har valt nivå: ${selectedAvatar.difficulty}</p>`
    }
})

// Function to show a notification message on display.
function showDialog(message) {
    const dialog = document.getElementById('dialog')
    document.getElementById('dialog-message').textContent = message
    dialog.showModal()
}

// Hide/close dialog when close button is pressed.
document.getElementById('dialog-close').addEventListener('click', function () {
    document.getElementById('dialog').close()
})

// When click "Start" button.
document.getElementById('start-game').addEventListener('click', function () {
    const playerName = document.getElementById('player-name').value.trim()

    // Check if the player has entered their name yet.
    if (!playerName) {
        showDialog("Skriv in ditt namn!") // Alert & show a message if the players didn't in put their names.
        return
    }

    // Check if the player has selected Avatar yet.
    if (!selectedAvatar.head) {
        showDialog("Välj Avatar!") // Alert & show a message if the players didn't choose their Avatars.
        return
    }

    // Check if the player has selected level yet.
    if (!selectedAvatar.difficulty) {
        showDialog("Välj nivå!") // Alert & show a message if the players didn't choose their levels.
        return
    }

    // Show player's name, avatar and level when start game.
    console.log(`Välkommen: ${playerName}! Spelet startar...`)
    console.log(`Du har valt Avatar: ${selectedAvatar.head}`)
    console.log(`Du har valt nivå: ${selectedAvatar.difficulty}`)
    window.location.href = "start.html"
})

