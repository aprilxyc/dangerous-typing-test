window.addEventListener('load', initialiseGame) // once window loads, fire off inittialise ggame

// Global variables used for typing test
let time  = 5;
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
}

// grab a word from array and show it
function showWord(words) {
    // make random index to create random word
    const randomIndex = Math.floor(Math.random() * words.length);
    // display random word
    currentWord.innerHTML = words[randomIndex]
}

