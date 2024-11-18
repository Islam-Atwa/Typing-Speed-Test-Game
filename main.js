


const listWord = [
    "islam", "mohamed", "code", "programing",
    "dat", "javascript",
    "testing", "Town",
    "Country",
    // "Testing",
    // "Youtube",
    // "Linkedin",
    // "Twitter",
    // "Github",
    // "Leetcode",
    // "Internet",
    // "Python",
    // "Scala",
    // "Destructuring",
    // "Paradigm",
    // "Styling",
    // "Cascade",
    // "Documentation",
    // "Coding",
    // "Funny",
    // "Working",
    // "Dependencies",
    // "Task",
    // "Runner",
    // "Roles",
    // "Test",
    // "Rust",
    // "Playing"
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
scoreTotal.innerHTML = listWord.length;

// Disable paste event
input.addEventListener("paste", function (e) {
    e.preventDefault();
});

// Hide the start button after clicking it 
startButton.onclick = function () {
    this.remove();  // Hide start button
    input.focus();  // Focus 
    genword();
};

function genword() {
    let RandomWord = listWord[Math.floor(Math.random() * listWord.length)];
    let wordIndex = listWord.indexOf(RandomWord); // get word index
    listWord.splice(wordIndex, 1); // Remove Word from Array

    // show the random word
    theWord.innerHTML = RandomWord;
    upcomingWords.innerHTML = ''; //empty upcoming words

    for (let i = 0; i < listWord.length; i++) {
        // create div element
        let div = document.createElement("div");
        let txt = document.createTextNode(listWord[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay();
};

function startPlay(){
    timeLeft.innerHTML = defaultLevelSeconds;
    let start  = setInterval(()=>{
        timeLeft.innerHTML --;
        if (timeLeft.innerHTML === "0") {
            // stop timer 
            clearInterval(start);
            if (theWord.innerHTML.toLowerCase()=== input.value.toLowerCase()){
                input.value = ''; // reset value input
                scoreGot.innerHTML++;
                // التأكد من ان المصفوفة مازالت تحتوي علي كلمات
                if (listWord.length > 0) {
                    genword();
                }
                else{
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    // upcomingWords.remove();
                }
            }else{
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText)
                finishMessage.appendChild(span);
            }
        }
    },1000);
}