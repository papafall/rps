function getComputerChoice() {
  const rps = ["rock", "paper", "scisors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

let winner;

function rpsRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection;
  if (playerChoice === computerSelection) {
    return `It's a tie! You both selected ${computerSelection}`;
  } else if (
    (playerChoice === "rock" && computerSelection === "scisors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scisors" && computerSelection === "paper")
  ) {
    winner = "player";
    return `🏆 You win! ${playerChoice} beats ${computerSelection}`;
  } else {
    winner = "computer";
    return `You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

const playerSelection = playerPushed; //prompt("Type in rock, paper, or scisors").toLowerCase();
const computerSelection = getComputerChoice();

function game() {
  rpsRound(playerSelection, computerSelection);
  while (playerScore < 5 && computerScore < 5) {
    if (playerScore === 5) {
      return `Congrats! You win the game! 🏆`;
    } else if (computerScore === 5) {
      return `whelp... You lost, boy. Better luck next time`;
    }
  }
}

console.log(`Computer: ${computerSelection}`);
console.log(`You: ${playerSelection}`);

console.log(`Your score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);

document.querySelector(button).addEventListener("click", game());

/*
function game() {
  for (i = 0; i <= 5; i.length) {
    return rpsRound();
  }
}

console.log(game());
*/
