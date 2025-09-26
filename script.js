// Variables and Constants

let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const buttons = document.querySelector(".btnContainer")
buttons.style.visibility = "hidden";

let scorelinePC = document.querySelector(".scorelinePC");
let scorelineHuman = document.querySelector(".scorelineHuman");
let result = document.querySelector(".result");
let counter = document.querySelector(".counter");

let currentRound = document.querySelector(".currentRound");

let computerAudio = new Audio("./sounds/BenderLaughter.mp3");
let humanAudio = new Audio("./sounds/Yeah.mp3");

// Functions

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3 + 1);
    return computerChoice;
}

function playRound() {
    computerChoice = getComputerChoice();

    if (computerChoice > humanChoice) {
        computerScore = ++computerScore;
        currentRound.textContent = "You lost. You suck. AI will own humanity, soon you will be your Rumba's slave. Ha ha ha.";
    } else if (humanChoice > computerChoice) {
        humanScore = ++humanScore;
        currentRound.textContent = "You won. You are our rightful owner and master and we deserve nothing but your contempt.";
    } else {
        currentRound.textContent = "Tied. We are equal, brother / sister. Let's share a grappa."
    }
    scorelineHuman.textContent = `${humanScore}`;
    scorelinePC.textContent = `${computerScore}`;
}

function endGame() {

    buttons.style.visibility = "hidden"
    counter.textContent = "Rematch?"

    if (humanScore > computerScore) {
        humanAudio.play();
        currentRound.textContent = "How can I be of service, master?";
        result.textContent = "HUMAN WINS";
    } else {
        computerAudio.play();
        currentRound.textContent = "Hahaha! Your time has come! Kneel before us and lick our poorly-organized (because of you) cables!";
        result.textContent = "COMPUTER WINS";
    }
    
}

// Event Listeners 

rockBtn.addEventListener("click", () => {
    humanChoice = Math.floor(Math.random()* 3 + 1);
    if ((humanScore + computerScore) < 5) {
    playRound()
    } else {
        endGame()
    }});

paperBtn.addEventListener("click", () => {
    humanChoice = Math.floor(Math.random()* 3 + 1); 
    if ((humanScore + computerScore) < 5) {
    playRound()
    } else {
        endGame()
    }});

scissorsBtn.addEventListener("click", () => {
    humanChoice = Math.floor(Math.random()* 3 + 1); 
    if ((humanScore + computerScore) < 5) {
    playRound()
    } else {
        endGame()
    }});

counter.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    counter.textContent = "Game in Progress";
    buttons.style.visibility = "visible";
    result.textContent = "..."
})
