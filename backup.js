function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;
  const winningScore = 3;

  while (userScore < winningScore && computerScore < winningScore) {
    const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);

    const roundResult = determineWinner(userChoice, computerChoice);
    console.log(roundResult);

    if (roundResult === "You win!") {
      userScore++;
    } else if (roundResult === "You lose!") {
      computerScore++;
    }

    console.log(`Score - You: ${userScore} | Computer: ${computerScore}`);
  }

  if (userScore === winningScore) {
    console.log("Congratulations! You are the overall winner!");
  } else {
    console.log("Sorry, the computer is the overall winner. Try again!");
  }
}

// Start the game
playGame();
