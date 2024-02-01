// Function to randomize the computer selection
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const selections = document.createElement("p");
const winningMessage = document.createElement("p");
const gameMessage = document.querySelector("#game-message");
gameMessage.appendChild(selections);
gameMessage.appendChild(winningMessage);

const overallScore = document.querySelector("#overallScore");

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

//Function to deterine winner for 1 round
function rpsRound(playerChoice, computerChoice) {
  //const computerChoice = getComputerChoice();
  selections.textContent = `Computer chose ${computerChoice}`;
  let roundWinner = "";

  if (playerChoice === computerChoice) {
    roundWinner = `It's a tie! You both selected ${computerChoice}`;
    winningMessage.textContent = roundWinner;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundWinner = `🏆 You win! ${playerChoice} beats ${computerChoice}`;
    winningMessage.textContent = roundWinner;
    playerScore++;
  } else {
    roundWinner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    winningMessage.textContent = roundWinner;
    computerScore++;
  }
}

rock.addEventListener("click", function () {
  playerChoice = "rock";
  computerChoice = getComputerChoice();

  rpsRound(playerChoice, computerChoice);
});

paper.addEventListener("click", function () {
  playerChoice = "paper";
  computerChoice = getComputerChoice();

  rpsRound(playerChoice, computerChoice);
});

scissors.addEventListener("click", function () {
  playerChoice = "scissors";
  computerChoice = getComputerChoice();

  rpsRound(playerChoice, computerChoice);
});

//Game function that loops and adds 1 point to overall score until someone reaches 5 points and wins the game
/*
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = 5;

  while (playerScore < winningScore && computerScore < winningScore) {
    //const playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
    //const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const roundResult = rpsRound(playerChoice, computerChoice);
    console.log(roundResult);

    roundResult;

    if (roundResult === `🏆 You win! ${playerChoice} beats ${computerChoice}`) {
      playerScore++;
    } else if (
      roundResult === `You Lose! ${computerChoice} beats ${playerChoice}`
    ) {
      computerScore++;
    }

    console.log(`Score - You: ${playerScore} | Computer: ${computerScore}`);
  }

  if (playerScore === winningScore) {
    console.log(`Congrats! You win the game! 🏆`);
  } else if (computerScore === winningScore) {
    console.log(`whelp... You lost, boy. Better luck next time`);
  }
}
*/
