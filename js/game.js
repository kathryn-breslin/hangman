// Word Guess Game

//Theme : Phases of the Moon

//Define variables
var wins;
var losses;
var userGuesses = [];
var blanksForRandomWord = [];
var randomMoon = [];
var guessesRemaining;
var moonPhases = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waxing Crescent"];

//Get keypress from user

// userGuesses = document.onkeyup = function(event) {
//     // console.log(event.key);
// }

//start the game by getting a random word from the array
function startGame() {
    wins = 0;
    losses = 0;
    guessesRemaining = 10;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessesRemaining").textContent = guessesRemaining;

    randomMoon = moonPhases[Math.floor(Math.random() * moonPhases.length)];
    console.log(randomMoon);

    //Show random word/moon on the page
    for (var i = 0; i < randomMoon.length; i++) {
        // console.log(randomMoon.charAt(i));
        blanksForRandomWord.push(' __ ');
    }
    document.getElementById("moonUnderscores").innerHTML = blanksForRandomWord.join(" ");
    
    document.onkeyup = function (event) {
        var userInput = event.key.toLowerCase();
        userGuesses.push(userInput);
        console.log(userGuesses)
        document.getElementById("guessesSoFar").textContent = userGuesses;
        //if statement to block duplicates
    }

}
startGame();

//Getting the user keypress