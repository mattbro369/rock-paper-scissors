const rps = ["Rock", "Paper", "Scissors"];


// Computer chooses
function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

// // Function to play round, taking player choice as parameter
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        alert(`Player wins, ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else {
        alert(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "Paper";
console.log(playRound(playerSelection,computerSelection));

