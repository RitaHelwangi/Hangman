//poängvy

/*let result = [
	name, guesses, wordLength,date, time, wins, losses,
]

array.forEach(element => {
	
});

//datum+tid
let now = new Date();
alert( now ); // shows current date/time*/

//slumpa fram ett ord. 
const words = ["äpple", "banan", "citron"];

//slumpa ett index Math.random()
const randomIndex = Math.floor(Math.random()* words.length);

//välj ordet
const randomWord = words[randomIndex];
//console.log(randomWord);
document.getElementById("randomWordDisplay").textContent = randomWord;

//toggle vy
/*
document.querySelector('.show-loser-btn').addEventListener('click', () => {
	document.querySelector('#lose').classList.remove('.hidden')
})

*/

document.querySelector('.show-winner-btn').addEventListener('click', function() {
    // Visa vinnarsidan och dölja gameover-sidan
    document.getElementById('win').classList.remove('hidden');
    document.getElementById('lose').classList.add('hidden');
});

document.querySelector('.show-loser-btn').addEventListener('click', function() {
    // Visa gameover-sidan och dölja vinnarsidan
    document.getElementById('lose').classList.remove('hidden');
    document.getElementById('win').classList.add('hidden');
});
