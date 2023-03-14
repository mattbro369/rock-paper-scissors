const rps = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let winner = false;
const pVisibleScore = document.getElementById("player-score");
const cVisibleScore = document.getElementById("computer-score");
const result = document.getElementById("choices-result");

const btn = document.querySelectorAll(".buttons-game");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    game();
  });
  return playerSelection;
});

function game() {
  if (winner === false) {
    getComputerChoice();
    playRound(playerSelection, computerSelection);
    printScore();
    checkScore(playerScore, computerScore);
  } else {
    alert("GAME OVER!");
  }
}

function getComputerChoice() {
  computerSelection = rps[Math.floor(Math.random() * rps.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result.innerText = `Player wins! ${playerSelection} beats ${computerSelection}`;
    return playerScore++;
  } else if (playerSelection === computerSelection) {
    result.innerText = "It's a tie!";
    return;
  } else {
    result.innerText = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    return computerScore++;
  }
}

function printScore() {
  pVisibleScore.innerText = `${playerScore}`;
  cVisibleScore.innerText = `${computerScore}`;
}

function checkScore(playerScore, computerScore) {
  if (playerScore === 5) {
    result.innerText = "Player wins the game!";
    return (winner = true);
  } else if (computerScore === 5) {
    result.innerText = "Computer wins the game..";
    return (winner = true);
  } else {
    return winner;
  }
}
