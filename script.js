function getComputerChoice() {
  const rps = ["rock", "paper", "scisors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

function rpsRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection;
  if (playerChoice === computerSelection) {
    return `It's a tie! You both selected ${computerSelection}`;
  } else if (
    (playerChoice === "rock" && computerSelection === "scisors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scisors" && computerSelection === "paper")
  ) {
    return `🏆 You win! ${playerChoice} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

const playerSelection = prompt("Type in rock, paper, or scisors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(`Computer: ${computerSelection}`);
console.log(`You: ${playerSelection}`);
console.log(rpsRound(playerSelection, computerSelection));

function playRound() {}
