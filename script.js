console.log("Let's play Rock, Paper and Scissors!");

let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

const body = document.querySelector("body");
const button = document.querySelectorAll("button");
const displaySelection = document.querySelector(".display-selection");
const displayRound = document.querySelector(".display-round");
const displayResult = document.querySelector(".display-result");
const displayScore = document.querySelector(".display-score");
const message = document.querySelector(".message");

let playerSelection;
let computerSelection = getComputerChoice();

button.forEach((button) => {
  button.addEventListener("click", function (e) {
    playerSelection = e.target.value;

    displaySelection.textContent = `You choose ${playerSelection}!`;

    playRound(computerSelection, playerSelection);
    displayScore.textContent = `Human: ${humanScore} vs Computer: ${computerScore}`;

    if (humanScore === maxScore || computerScore === maxScore) {
      const result =
        humanScore > computerScore ? "Human victory!!" : "Computer victory!!";
      body.removeChild(message);
      displayRound.textContent = result;
    } else {
      computerSelection = getComputerChoice();
      console.log(computerSelection);
      message.textContent = "Please click for another option again!";
    }
  });
});

function playRound(computerSelection, humanChoice) {
  switch (computerSelection) {
    case "scissors":
      if (humanChoice === "paper") {
        displayRound.textContent = "Computer wins the round!";
        ++computerScore;
      } else if (humanChoice === "rock") {
        displayRound.textContent = "Human wins the round!";
        ++humanScore;
      } else {
        displayRound.textContent = "It's a tie!";
      }
      break;
    case "rock":
      if (humanChoice === "paper") {
        displayRound.textContent = "Human wins the round!";
        ++humanScore;
      } else if (humanChoice === "scissors") {
        displayRound.textContent = "Computer wins the round!";
        ++computerScore;
      } else {
        displayRound.textContent = "It's a tie!";
      }
      break;
    case "paper":
      if (humanChoice === "rock") {
        displayRound.textContent = "Computer wins the round!";
        ++computerScore;
      } else if (humanChoice === "scissors") {
        displayRound.textContent = "Human wins the round!";
        ++humanScore;
      } else {
        displayRound.textContent = "It's a tie!";
      }
      break;
    default:
      displayRound.textContent = "Waiting for human to select an option..";
  }
}

function getComputerChoice() {
  let max = 3;
  let result = "";
  let number = Math.floor(Math.random() * max + 1);
  if (number === 1) {
    result = "rock";
  } else if (number === 2) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}
