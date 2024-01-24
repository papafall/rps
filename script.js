// Function to randomize the computer selection
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

//Function to deterine winner for 1 round
function rpsRound(playerChoice, computerChoice) {
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

//Game function that loops and adds 1 point to overall score until someone reaches 5 points and wins the game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = 5;

  while (playerScore < winningScore && computerScore < winningScore) {
    const playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
    const computerChoice = getComputerChoice();
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

game();
