

function laggTillResultat() {
    // Testdata
    const result = [
        {
            name: "Spelare 1",
            incorrectGuesses: 3,
            wordLength: 5,
            time: "1:45",
            guessedCorrectly: true
        },
        {
            name: "Spelare 2",
            incorrectGuesses: 1,
            wordLength: 6,
            time: "2:30",
            guessedCorrectly: false
        },
        {
            name: "Spelare 3",
            incorrectGuesses: 2,
            wordLength: 4,
            time: "1:00",
            guessedCorrectly: true
        },
        {
            name: "Spelare 4",
            incorrectGuesses: 4,
            wordLength: 7,
            time: "3:15",
            guessedCorrectly: false
        }
    ];

    // Hämta container där resultaten ska läggas till
    const resultContainer = document.getElementById('result-lista');

    // Skapa och lägg till rubriker för varje kolumn (om de inte finns än)
    if (resultContainer.children.length === 0) {
        const headerRow = document.createElement('div');
        headerRow.classList.add('result-item');
        headerRow.innerHTML = `
            <div class="column"><strong>Spelare</strong></div>
            <div class="column"><strong>Felaktiga Gissningar</strong></div>
            <div class="column"><strong>Ordets Längd</strong></div>
            <div class="column"><strong>Tid</strong></div>
            <div class="column"><strong>Resultat</strong></div>
        `;
        resultContainer.appendChild(headerRow); // Lägg till rubrikerna
    }

    // Loopa genom alla spelare och visa deras resultat
    result.forEach((player) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');  // Lägg till en klass för att separera varje spelare

        // Lägg till spelarinformation i resultItem
        resultItem.innerHTML = `
            <div class="column">${player.name}</div>
            <div class="column">${player.incorrectGuesses}</div>
            <div class="column">${player.wordLength}</div>
            <div class="column">${player.time}</div>
            <div class="column">${player.guessedCorrectly ? 'Vann' : 'Förlorade'}</div>
        `;

        // Lägg till resultatet i result-container
        resultContainer.appendChild(resultItem);
    });
}

document.addEventListener('DOMContentLoaded', laggTillResultat);