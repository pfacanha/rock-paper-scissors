console.log("Let's play Rock, Paper and Scissors!");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let userInput = prompt("Please enter rock, paper or scissors");

  userInput = userInput.toLowerCase();

  return userInput;
}

function playRound(computerChoice, humanChoice) {
  switch (computerChoice) {
    case "scissors":
      if (humanChoice === "paper") {
        console.log("computer wins");
        ++computerScore;
      } else if (humanChoice === "rock") {
        console.log("human wins");
        ++humanScore;
      } else {
        console.log("It's a tie");
      }
      break;
    case "rock":
      if (humanChoice === "paper") {
        console.log("human wins");
        ++humanScore;
      } else if (humanChoice === "scissors") {
        console.log("computer wins");
        ++computerScore;
      } else {
        console.log("It's a tie");
      }
      break;
    case "paper":
      if (humanChoice === "rock") {
        console.log("computer wins");
        ++computerScore;
      } else if (humanChoice === "scissors") {
        console.log("human wins");
        ++humanScore;
      } else {
        console.log("It's a tie");
      }
      break;
  }
}

function playGame() {
  let i = 0;
  let computerChoice;
  let humanChoice;

  while (i < 5) {
    computerChoice = getComputerChoice();
    console.log(computerChoice);

    humanChoice = getHumanChoice();
    console.log(humanChoice);
    playRound(computerChoice, humanChoice);
    ++i;
  }

  return (result =
    computerScore > humanScore ? "Computer victory!!!" : "Human victory!!!");
}

console.log(playGame());
