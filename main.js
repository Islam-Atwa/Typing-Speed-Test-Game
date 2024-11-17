
// // create an Array containing random words
// const RandomWord = [
//     "islam", "mohamed", "code", "programing",
//     "dat", "javascript",
//     "testing",  "Town",
//     "Country",
//     "Testing",
//     "Youtube",
//     "Linkedin",
//     "Twitter",
//     "Github",
//     "Leetcode",
//     "Internet",
//     "Python",
//     "Scala",
//     "Destructuring",
//     "Paradigm",
//     "Styling",
//     "Cascade",
//     "Documentation",
//     "Coding",
//     "Funny",
//     "Working",
//     "Dependencies",
//     "Task",
//     "Runner",
//     "Roles",
//     "Test",
//     "Rust",
//     "Playing"
// ];

// // Game Level
// const level = {
//     "Easy": 8, 
//     "Normal":6,
//     "Hard": 3
// };

// // Defult level
// let DefultLevel = "Normal";
// let DefultLevelSecond = level[DefultLevel];

// // get element 
// let lvlNameSpan  = document.querySelector(".message .lvl");
// let secondSpan = document.querySelector(".message .second");
// let startButton = document.querySelector(".name");
// let theWord = document.querySelector(".the-word");
// let input = document.querySelector(".input");
// let upcomingWords =document.querySelector(".upcoming-words");
// let timeLeft = document.querySelector(".time span");
// let scoreGot =document.querySelector(".score got");
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");

// lvlNameSpan.innerHTML = DefultLevel;
// secondSpan.innerHTML = DefultLevelSecond;
// timeLeft.innerHTML = DefultLevelSecond;
// scoreTotal.innerHTML = RandomWord.length;

// // disaple past event 
// input.addEventListener("paste",function(e){
//     e.preventDefault();
// });


// create an Array containing random words
const RandomWord = [
    "islam", "mohamed", "code", "programing",
    "dat", "javascript",
    "testing", "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Game Level
const level = {
    "Easy": 8, 
    "Normal": 6,
    "Hard": 3
};

// Default level
let defaultLevel = "Normal";
let defaultLevelSeconds = level[defaultLevel];

// get element
let lvlNameSpan = document.querySelector(".message .lvl");
let secondSpan = document.querySelector(".message .second");
let startButton = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let input = document.querySelector(".input");
let upcomingWords = document.querySelector(".upcoming-words");
let timeLeft = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Set initial values for level, seconds, and score
lvlNameSpan.innerHTML = defaultLevel;
secondSpan.innerHTML = defaultLevelSeconds;
timeLeft.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = RandomWord.length;

// Disable paste event
input.addEventListener("paste", function (e) {
    e.preventDefault();
});