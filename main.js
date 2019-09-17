window.addEventListener('load', initialiseGame) // once window loads, fire off inittialise ggame

// Global variables used for typing test

// Available levels
const levels = {
    easy  : 5,
    medium: 3,
    hard  : 2
}

// to change the level
const currentLevel = levels.easy;  // set it to easy

let time  = currentLevel;
let score = 0;
let isPlaying;

// get the DOM elements
const wordInput    = document.querySelector("#input-word");
const timeDisplay  = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const currentWord  = document.querySelector("#current-word");
const seconds      = document.querySelector("#seconds")
const message      = document.querySelector("#message");

// hardcoded array of words
const words = [
    "hello",
    "potato",
    "farmer"
];

// initialise game 
function initialiseGame() {
    // call function to load random word from array
    showWord(words);

    // start matching on keys
    // everytime we type, we want to fire off an event that fires off a function
    wordInput.addEventListener("input", startMatch);

    // call countdown every second
    setInterval(countdown, 1000); // run countdown every second

    // check the game status to see if it is still being played or if the game is over
    setInterval(checkStatus, 50)
}

// grab a word from array and show it
function showWord(words) {
    // make random index to create random word
    const randomIndex = Math.floor(Math.random() * words.length);
    // display random word
    currentWord.innerHTML = words[randomIndex];
}

function countdown() {
    // if time is greater than 0 then time has not run out
    if(time > 0) {
        // decrementt the time
        time--;
    } else if(time === 0) {
        // game is over
        isPlaying = false;
    }

    // show time 
    timeDisplay.innerHTML = time;  // set html to the time
}

function checkStatus() {
   if(!isPlaying && time === 0) {
       message.innerHTML = "Game Over";
       score             = -1;           // set to negative 1 so you don't get a score for the first word
   }
}

function startMatch() {
    if (matchWords()) {
        isPlayer = true;
        time     = currentLevel;
        showWord(words);
        wordInput.value = "";  // clear the text
        score++
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0
    } else {
        scoreDisplay.innerHTML = score;  // show the score
    }

}

// matches current word to the word input
function matchWords() {
       // this does the actual matching
       if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!"
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

