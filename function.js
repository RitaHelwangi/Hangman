

   // Skapa en array för att lagra spelarnas resultat
   let resultat = [];

   // Funktion som sparar resultat efter varje spelares spel
   function laggTillResultat() 
   {
       // Hämta spelarens namn och poäng från input-fälten
       const namn = document.getElementById('spelare-namn').value;
       const poang = parseInt(document.getElementById('spelare-poang').value);
    }    

   // Funktion för att visa resultat på webbsidan
   function visaResultat() {
       const lista = document.getElementById('resultat-lista');
       lista.innerHTML = ''; // Rensa tidigare lista

       // Lägg till varje spelares resultat i listan
       resultat.forEach(player => {
           const listItem = document.createElement('li');
           listItem.textContent = `${player.name}: ${player.score} poäng`;
           lista.appendChild(listItem);
       });
   }




   //för att sortera listan (1an först.. osv)
 

   


    function sorteraResultat() 
    {
        // Sortera listan baserat på poäng
        resultat.sort(compareFn);

        // Visa den uppdaterade listan
        visaResultat();
    }

    // Lägg till en eventlistener på sorteringsknappen
    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener('click', sorteraResultat);

    // Visa initialt resultat när sidan laddas
    visaResultat();