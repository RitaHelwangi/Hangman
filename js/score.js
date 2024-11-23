

function laggTillResultat() {
    // Testdata
    const result = [];

    // Hämta container där resultaten ska läggas till
    const resultContainer = document.getElementById('result-lista');

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
        resultContainer.appendChild(headerRow); 
    }

    // Loopa genom alla spelare och visa deras resultat
    result.forEach((player) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');  
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