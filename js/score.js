// Funktion för att visa resultaten
function laggTillResultat(result) {
    const resultContainer = document.getElementById('result-lista');
    resultContainer.innerHTML = ''; 

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

    result.forEach((player) => {
        const avatarName = player.avatar || 'default-avatar'; 
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <div class="column">
                <img src="img/${avatarName}.png" alt="${avatarName}" class="avatar-img">
            </div>
            <div class="column">${player.name}</div>
            <div class="column">${player.incorrectGuesses}</div>
            <div class="column">${player.wordLength}</div>
            <div class="column">${new Date(player.time).toLocaleString()}</div>
            <div class="column">${player.guessedCorrectly ? 'Vann' : 'Förlorade'}</div>
        `;
        resultContainer.appendChild(resultItem);
    });
}

// När användaren klickar på fliken "Dina poäng", uppdatera resultaten
document.querySelector('#score-flik').addEventListener('click', function() {
    // Hämta de senaste resultaten från localStorage varje gång användaren går till score
    const updatedGameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    
    // Uppdatera visningen av resultaten
    laggTillResultat(updatedGameResults);
});


// När användaren klickar på knapparna för att visa poäng, uppdatera också resultaten
document.querySelector('#visa-poang-btn').addEventListener('click', function() {
    const updatedGameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    laggTillResultat(updatedGameResults);
});

document.querySelector('#visa-poang-btn-lose').addEventListener('click', function() {
    const updatedGameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    laggTillResultat(updatedGameResults);
});

//vinnar sidan glömt
document.querySelector('#visa-poang-btn-win').addEventListener('click', function() {
    const updatedGameResults = JSON.parse(localStorage.getItem("gameResults")) || [];
    laggTillResultat(updatedGameResults);
});



// Sortering av antal gissningar
document.getElementById('sort-button').addEventListener('click', () => {
    const gameResults = JSON.parse(localStorage.getItem("gameResults")) || []; // Hämta resultaten
    const sortedResults = gameResults.sort((a, b) => a.incorrectGuesses - b.incorrectGuesses);
    laggTillResultat(sortedResults);
});

document.getElementById('time-button').addEventListener('click', () => {
    const gameResults = JSON.parse(localStorage.getItem("gameResults")) || []; // Hämta resultaten
    const sortedResults = gameResults.sort((a, b) => new Date(b.time) - new Date(a.time));
    laggTillResultat(sortedResults);
});


//rensa lista
/*document.getElementById('rensa-resultat').addEventListener('click', () => {
    localStorage.removeItem("gameResults");
    laggTillResultat([]); // Visa en tom lista
}); */


//spela igen knapp-score
document.querySelector('#spela-igen-btn-score').addEventListener('click', function() {
	hideWiews()
	document.querySelector('#body-game').classList.remove('hide');
	
});

function hideWiews() {
	const bodyStart = document.querySelector('#body-start'); 
	const bodyGame = document.querySelector('#body-game'); 
	const bodyScore = document.querySelector('#body-score');
	document.querySelector('#body-game').classList.add('hide');
	document.querySelector('#body-score').classList.add('hide');
	document.querySelector('#body-start').classList.add('hide');
}