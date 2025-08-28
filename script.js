let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 3 + 1);
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        return humanChoice = 1;
    } else if (humanChoice == "paper") {
        return humanChoice = 2;
    } else if (humanChoice == "scissors") {
        return humanChoice = 3;
    } else {
        console.log("That is not an option! You cheater!");
        return;
    }
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice(computerChoice);
    humanChoice = getHumanChoice(humanChoice);
    if (computerChoice > humanChoice) {
        computerScore = ++computerScore;
        console.log("You lost. You suck. AI will own humanity, soon you will be your Rumba's slave. Ha ha ha.");
    } else if (humanChoice > computerChoice) {
        humanScore = ++humanScore;
        console.log("You won. You are our rightful owner and master and we deserve nothing but your contempt.");
    } else {
        console.log("Tied. We are equal, brother. Let's share a grappa.")
    }
    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
}

playRound(computerChoice, humanChoice);
