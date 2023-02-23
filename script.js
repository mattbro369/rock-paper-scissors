const rps = ["rock", "paper", "scissors"];
let computerSelection;
let computerSelectionFinal; 
let playerSelection;
let playerSelectionFinal;
let playerScore = 0;
let computerScore = 0;
let winner = false;

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

// Function to print score
function printScore() {
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log("");
}

// Function to check score and print if winner 
function checkScore(playerScore, computerScore) {
    if (playerScore === 5) {
        alert("Player wins!");
        return winner = true;
    } else if (computerScore === 5) {
        alert("Computer wins!")
        return winner = true;
    } else {
        return winner;
    }
}

// Function to play round until score reaches 5, including all previous declared functions
function game(round) {
    do {
        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelectionFinal, computerSelectionFinal);
        printScore();
        checkScore(playerScore, computerScore);
    } while (winner === false)
}

// Calling game
game(playRound);
