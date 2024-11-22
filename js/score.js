
function laggTillResultat()
{
    
    const result = 
    {
        name: "Spelare 1",
        incorrectGuesses: 3,
        wordLength: 5,
        time: "1:45",
        guessedCorrectly: true
    };

    document.getElementById("result-name").textContent = result.name;
    document.getElementById("result-guess").textContent = result.incorrectGuesses;
    document.getElementById("result-length").textContent = result.wordLength;
    document.getElementById("result-time").textContent = result.time;

     // Kontrollera om spelaren har vunnit eller förlorat
     let gameResult = result.guessedCorrectly ? "Vinn" : "Förlorade";
     document.getElementById("result-game").textContent = result.guessedCorrectly;
}

//??
document.addEventListener('DOMContentLoaded', laggTillResultat);