(function () {
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

  let playerScore = 0;
  let computerScore = 0;
  let winningScore = 5;

  let playerChoice, computerChoice;

  function updateSelectionMessage(playerChoice, computerChoice) {
    selections.textContent = ` You chose ${playerChoice} -- Computer chose ${computerChoice}`;
  }

  function displayRoundResult(round) {
    winningMessage.textContent = round;
    playerTotal.textContent = playerScore;
    computerTotal.textContent = computerScore;
  }

  function updateScores(round) {
    if (round.includes("You win!")) {
      playerScore++;
    } else if (round.includes("You Lose!")) {
      computerScore++;
    }
  }

  function checkGameWinner() {
    if (playerScore === winningScore || computerScore === winningScore) {
      if (playerScore > computerScore) {
        alert("Congratulations! You win the game! 🏆");
      } else if (computerScore > playerScore) {
        alert("Game over - you lose 😔");
      }
      resetGame();
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerTotal.textContent = playerScore;
    computerTotal.textContent = computerScore;
  }

  function playRound(choice) {
    computerChoice = getComputerChoice();
    const round = rpsRound(choice, computerChoice);
    updateSelectionMessage(choice, computerChoice);
    displayRoundResult(round);
    updateScores(round);
    checkGameWinner();
  }

  function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
  }

  function rpsRound(playerChoice, computerChoice) {
    // Your existing logic for determining the round result
  }

  rock.addEventListener("click", function () {
    playRound("rock");
  });

  paper.addEventListener("click", function () {
    playRound("paper");
  });

  scissors.addEventListener("click", function () {
    playRound("scissors");
  });
})();
