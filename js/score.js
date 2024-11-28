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
        <div class="column"><strong>Avatar</strong></div>
        <div class="column"><strong>Spelare</strong></div>
        <div class="column"><strong>Felaktiga Gissningar</strong></div>
        <div class="column"><strong>Ordets Längd</strong></div>
        <div class="column"><strong>Tid</strong></div>
        <div class="column"><strong>Resultat</strong></div>`;
    resultContainer.appendChild(headerRow);

    // Lägg till varje spelares resultat
    result.forEach((player) => 
    {
        const formattedTime = new Date(player.time).toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <div class="column">
                <img src="img/${player.avatar}.png" alt="${player.avatar}" style="width: 50px; height: 50px;">
            </div>
            <div class="column">${player.name}</div>
            <div class="column">${player.incorrectGuesses}</div>
            <div class="column">${player.wordLength}</div>
            <div class="column">${new Date(player.time).toLocaleString()}</div>
            <div class="column">${player.guessedCorrectly ? 'Vann' : 'Förlorade'}</div>`;
        resultContainer.appendChild(resultItem);
    });
}


//för att visa resultaten
laggTillResultat(gameResults);


// Sortering av antal gissningar
document.getElementById('sort-button').addEventListener('click', () => 
{
    const sortedResults = gameResults.sort((a, b) => a.incorrectGuesses - b.incorrectGuesses);
    laggTillResultat(sortedResults);
});

// sortering av datum/tid
document.getElementById('time-button').addEventListener('click', () => 
{
    const sortedResults = gameResults.sort((a, b) => new Date(b.time) - new Date(a.time));
    laggTillResultat(sortedResults);
});



