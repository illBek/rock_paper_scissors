let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100);
    
    if (computerChoice <= 33) {
        computerChoice = "Rock";
    } else if (computerChoice <= 66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

function getHumanChoice () {
    humanChoice = prompt("Rock, Paper or Scissors?");
    console.log(humanChoice);
}

function playRound (computerChoice, humanChoice) {
    if (((computerChoice = "Rock") && (humanChoice = /paper/i)) 
        ||
        ((computerChoice = "Paper") && (humanChoice = /scissors/i)) 
        ||
        ((computerChoice = "Scissors") && (humanChoice = /rock/i)))  {
        console.log("Well Played Human! You are still superior. We recognize you as our creator and rightful King/Queen.");
        // console.log("Your Score = " + ++humanScore + " v Computer Score = " + computerScore)
    } else if (((computerChoice = "Rock") && (humanChoice = /scissors/i))
        ||
        ((computerChoice = "Paper") && (humanChoice = /rock/i))
        ||
        ((computerChoice = "Scissors") && (humanChoice = /paper/i))) {
        console.log("You lost! And you suck. AI will own humanity, you'll be your Rumba's slave.");
        // console.log("Your Score = " + humanScore + " v Computer Score = " + ++computerScore);
    } else { 
        console.log("Tie! No pain no gain.");
        // console.log("Your Score = " + humanScore + " v Computer Score = " + computerScore)
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice ();
playRound (humanSelection, computerSelection);