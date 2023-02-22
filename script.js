// TODO
// SET THE GAME TO RESTART 5 TIMES
// PLAYER CHOICE NEEDS TO BE INSIDE THE PLAYROUND - CHOICE MUST BE MADE EVERY ROUND


const rps = ["rock", "paper", "scissors"];
let computerSelection;
let computerSelectionFinal; 
let playerSelection;
let playerSelectionFinal;
let playerScore = 0;
let computerScore = 0;

// Computer chooses
function getComputerChoice() {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];
    return computerSelectionFinal = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
}

// get and check user input
function getPlayerChoice(playerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" || playerSelection === "") {
        playerSelection = prompt("Please enter: Rock, Paper or Scissors").toLowerCase();
    }
    return playerSelectionFinal = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

// // Function to play round, taking player choice as parameter
function playRound(playerSelectionFinal, computerSelectionFinal) {
    if ((playerSelectionFinal === "Rock" && computerSelectionFinal === "Scissors") || (playerSelectionFinal === "Paper" && computerSelectionFinal === "Rock") || (playerSelectionFinal === "Scissors" && computerSelectionFinal === "Paper")) {
        console.log(`Player wins, ${playerSelectionFinal} beats ${computerSelectionFinal}`);
        return playerScore++;
    } else if (playerSelectionFinal === computerSelectionFinal) {
        console.log("It's a tie!");
        return;
    } else {
        console.log(`Computer wins! ${computerSelectionFinal} beats ${playerSelectionFinal}`);
        return computerScore++;
    }
    
}

// GAME FUNCTION TO REPLAY GAME 5 TIMES
// GAME MUST KEEP TRACK OF SCORE (CONSOLE.LOG)
function game(round) {  
    for (i = 1; i <= 5; i++) {
    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelectionFinal, computerSelectionFinal);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    }
}

game();
