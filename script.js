// TODO
// FIX THE CHOICE VALIDATION
// SET THE GAME TO RESTART


const rps = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
const computerSelectionFinal = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
const playerSelection = getPlayerChoice();
const playerSelectionFinal = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);


// Computer chooses
function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

// get and check user input
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors" || playerChoice === "") {
        playerChoice = prompt("Please enter: Rock, Paper or Scissors").toLowerCase();
    }
    return playerChoice;
}

// // Function to play round, taking player choice as parameter
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        alert(`Player wins, ${playerSelectionFinal} beats ${computerSelectionFinal}`);
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else {
        alert(`Computer wins! ${computerSelectionFinal} beats ${playerSelectionFinal}`);
    }
}



// playRound(playerSelection, computerSelection);


