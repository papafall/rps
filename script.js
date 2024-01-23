function getComputerChoice() {
  const rps = ["rock", "paper", "scisors"];
  const choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

function rpsRound(playerChoice, computerChoice) {
  const playerWin = `🏆 You win! ${playerChoice} beats ${computerChoice}`;
  const computerWin = `You Lose! ${computerChoice} beats ${playerChoice}`;

  if (playerChoice === computerChoice) {
    return `It's a tie! You both selected ${computerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scisors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scisors" && computerChoice === "paper")
  ) {
    return playerWin;
  } else {
    return computerWin;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = 5;

  while (playerScore < winningScore && computerScore < winningScore) {
    const playerChoice = prompt("rock, paper, or scisor?").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const roundResult = rpsRound(playerChoice, computerChoice);
    console.log(roundResult);

    if (roundResult === playerWin) {
      playerScore++;
    } else if (roundResult === computerWin) {
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
