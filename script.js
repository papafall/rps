// Getting the HTML elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const selections = document.createElement("p");
const winningMessage = document.createElement("p");
const gameMessage = document.querySelector("#game-message");
gameMessage.appendChild(selections);
gameMessage.appendChild(winningMessage);

const playerTotal = document.querySelector("#playerTotal");
const computerTotal = document.querySelector("#computerTotal");

// Function to randomize the computer selection
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

//Defining the scores
let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

//Function to determine winner for 1 round
function rpsRound(playerChoice, computerChoice) {
  selections.textContent = ` You chose ${playerChoice} -- Computer chose ${computerChoice}`;

  if (playerChoice === computerChoice) {
    return `It's a tie! You both selected ${computerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `🏆 You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

//Function to announce game winner; first player to reach 5 points
function gameWinner() {
  if (playerScore === winningScore || computerScore === winningScore) {
    if (playerScore > computerScore) {
      alert("Congratulations! You win the game! 🏆");
    } else if (computerScore > playerScore) {
      alert("Game over - you lose 😔");
    }
    location.reload();
  }
}

//Function to play 1 game
function game() {
  const round = rpsRound(playerChoice, computerChoice);

  if (round === `🏆 You win! ${playerChoice} beats ${computerChoice}`) {
    playerScore++;
  } else if (round === `You Lose! ${computerChoice} beats ${playerChoice}`) {
    computerScore++;
  }
  winningMessage.textContent = round;
  playerTotal.textContent = playerScore;
  computerTotal.textContent = computerScore;

  gameWinner();
}

rock.addEventListener("click", function () {
  playerChoice = "rock";
  computerChoice = getComputerChoice();

  game();
});

paper.addEventListener("click", function () {
  playerChoice = "paper";
  computerChoice = getComputerChoice();

  game();
});

scissors.addEventListener("click", function () {
  playerChoice = "scissors";
  computerChoice = getComputerChoice();

  game();
});
