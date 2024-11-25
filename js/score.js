
// Funktion för att visa resultaten
function laggTillResultat(result) 
{
    // Container där resultaten ska läggas till
    const resultContainer = document.getElementById('result-lista');

    // Om det inte finns några resultat, gör inget
    if (!result || result.length === 0) return;

    // Om det är första gången, lägg till header-raden
    if (resultContainer.children.length === 0) 
        {
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
    result.forEach((player) => 
        {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <div class="column">${player.name}</div>
            <div class="column">${player.incorrectGuesses}</div>
            <div class="column">${player.wordLength}</div>
            <div class="column">${player.time}</div>
            <div class="column">${player.guessedCorrectly ? 'Vann' : 'Förlorade'}</div>
        `;
        resultContainer.appendChild(resultItem);
    });
}

// Funktion för att sortera resultaten efter felaktiga gissningar
function sorteraResultat(result) 
{
    // Sortera listan baserat på felaktiga gissningar
    return result.sort((a, b) => a.incorrectGuesses - b.incorrectGuesses); // Sorterar i stigande ordning
}

// Hämta resultaten från localStorage och visa
document.addEventListener('DOMContentLoaded', () => {
    const result = JSON.parse(localStorage.getItem('gameResults')) || [];
    laggTillResultat(result);

    // Sortera när knappen klickas
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', () => {
        const sortedResult = sorteraResultat([...result]); // Gör en kopia av arrayen innan sortering
        laggTillResultat(sortedResult); // Visa de sorterade resultaten
    });
});