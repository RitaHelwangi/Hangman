// Läs in resultaten från localStorage
const gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];

console.log(gameResults);

// Funktion för att visa resultaten
function laggTillResultat(result) 
{
    const resultContainer = document.getElementById('result-lista');
    resultContainer.innerHTML = ''; // Rensa tidigare resultat

    // Header-rad
    const headerRow = document.createElement('div');
    headerRow.classList.add('result-item', 'header-row');
    headerRow.innerHTML = `
        <div class="column"><strong>Spelare</strong></div>
        <div class="column"><strong>Felaktiga Gissningar</strong></div>
        <div class="column"><strong>Ordets Längd</strong></div>
        <div class="column"><strong>Tid</strong></div>
        <div class="column"><strong>Resultat</strong></div>`;
    resultContainer.appendChild(headerRow);

    // Lägg till varje spelares resultat
    result.forEach((player) => 
        {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <div class="column">${player.name}</div>
            <div class="column">${player.incorrectGuesses}</div>
            <div class="column">${player.wordLength}</div>
            <div class="column">${player.getTime}</div>
            <div class="column">${player.guessedCorrectly ? 'Vann' : 'Förlorade'}</div>`;
        resultContainer.appendChild(resultItem);
    });
}


//för att visa resultaten
laggTillResultat(gameResults);



// Sortering av resultaten
document.getElementById('sort-button').addEventListener('click', () => 
{
    const sortedResults = gameResults.sort((a, b) => a.incorrectGuesses - b.incorrectGuesses);
    laggTillResultat(sortedResults);
});

document.getElementById('time-button').addEventListener('click', () => 
{
    const sortedResults = gameResults.sort((a, b) => new Date(a.getTime) - new Date(b.getTime));
    laggTillResultat(sortedResults);
});

