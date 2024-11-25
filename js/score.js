
function laggTillResultat(result) {
    const resultContainer = document.getElementById('result-lista');

    // Rensa innehåll för att undvika duplicering
    resultContainer.innerHTML = '';

    // Skapa header-raden
    const headerRow = document.createElement('div');
    headerRow.classList.add('result-item', 'header-row');
    headerRow.innerHTML = `
        <div class="column"><strong>Spelare</strong></div>
        <div class="column"><strong>Felaktiga Gissningar</strong></div>
        <div class="column"><strong>Ordets Längd</strong></div>
        <div class="column"><strong>Tid</strong></div>
        <div class="column"><strong>Resultat</strong></div>
    `;
    resultContainer.appendChild(headerRow);

    // Lägg till varje spelares resultat
    result.forEach((player) => {
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


// Sortera-knappen
function sorteraResultat(result) {
    return result.sort((a, b) => a.incorrectGuesses - b.incorrectGuesses);
}

document.addEventListener('DOMContentLoaded', () => {
    // Hämta resultat från localStorage
    const result = JSON.parse(localStorage.getItem('gameResults')) || [];

    laggTillResultat(result);

    // Lägg till sorteringsfunktion
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', () => {
        const sortedResult = sorteraResultat([...result]);
        laggTillResultat(sortedResult);
    });
});