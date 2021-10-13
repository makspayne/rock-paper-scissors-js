let playerScore = 0;
let computerScore = 0;
let result = false;

const playerDisplay = document.querySelector(".player-display");
const computerDisplay = document.querySelector(".computer-display");
const infoDisplay = document.querySelector(".info");
const buttons = document.querySelectorAll(".buttons > button");
const playerScoreDisp = document.querySelector(".player-score");
const computerScoreDisp = document.querySelector(".computer-score");

function initVariables() {
  playerScore = 0;
  computerScore = 0;
  result = false;
}

function computerPlay() {
  randomPick = Math.floor(Math.random() * 3 + 1);
  if (randomPick === 1) {
    return "rock";
  } else if (randomPick === 2) {
    return "paper";
  } else if (randomPick === 3) {
    return "scissors";
  } else {
    return "Error";
  }
}

function playRound(player, computer) {
  player = player.toUpperCase();
  computer = computer.toUpperCase();
  console.log(player + "-" + computer);

  if (player == "ROCK" && computer == "PAPER") {
    // return "You Lose! Paper beats Rock"
    return 1;
  } else if (player == "PAPER" && computer == "SCISSORS") {
    // return "You Lose! Scissors beats Paper"
    return 1;
  } else if (player == "SCISSORS" && computer == "ROCK") {
    // return "You Lose! Rock beats Scissors"
    return 1;
  } else if (player == "ROCK" && computer == "SCISSORS") {
    // return "You Won! Rock beats Scissors"
    return 2;
  } else if (player == "PAPER" && computer == "ROCK") {
    // return "You Won! Paper beats Rock"
    return 2;
  } else if (player == "SCISSORS" && computer == "PAPER") {
    // return "You Won! Scissors beats Paper"
    return 2;
  } else {
    // return playRound(player, computerPlay());
    return 3;
  }
}

function playGame(e) {
  currentPlayerDisplay = playerDisplay.getAttribute("class");
  currentComputerDisplay = computerDisplay.getAttribute("class");

  playerSelection = e.target.attributes.class.value;
  computerSelection = computerPlay();

  playerDisplay.classList.remove(currentPlayerDisplay);
  computerDisplay.classList.remove(currentComputerDisplay);

  playerDisplay.classList.add(playerSelection);
  computerDisplay.classList.add(computerSelection);

  result = playRound(playerSelection, computerSelection);

  infoDisplay.textContent = "Play Game";

  if (result === 2) {
    console.log("win");
    playerScore++;
  } else if (result === 1) {
    console.log("lose");
    computerScore++;
  } else if (result === 3) {
    infoDisplay.textContent = "Draw!";
  }
  playerScoreDisp.textContent = playerScore;
  computerScoreDisp.textContent = computerScore;

  if (playerScore === 5) {
    infoDisplay.textContent = "You Win! Play Again!";
    initVariables();
  } else if (computerScore === 5) {
    infoDisplay.textContent = "Computer Wins! Play Again";
    initVariables();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playGame(e);
  });
});
