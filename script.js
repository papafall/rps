function getComputerChoice() {
  const rps = ["rock", "paper", "scisors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

let playerScore = 0;
let computerScore = 0;

function rpsRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection;
  if (playerChoice === computerSelection) {
    return `It's a tie! You both selected ${computerSelection}`;
  } else if (
    (playerChoice === "rock" && computerSelection === "scisors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scisors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    return `🏆 You win! ${playerChoice} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

const playerSelection = "rock"; //prompt("Type in rock, paper, or scisors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(`Computer: ${computerSelection}`);
console.log(`You: ${playerSelection}`);
console.log(rpsRound(playerSelection, computerSelection));

function game() {
  while (rpsRound()) {
    console.log(`Your score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
    if (playerScore === 5 ||)
  }
}

/*
function game() {
  for (i = 0; i <= 5; i.length) {
    return rpsRound();
  }
}

console.log(game());
*/
