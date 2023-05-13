// Selecting necessary elements from the DOM
const container = document.querySelector(".container");
const player = document.querySelector(".player-result p");
const computer = document.querySelector(".com-result p");
const info = document.querySelector(".result");
const infoPlayerScore = document.querySelector(".player-result span");
const infoComputerScore = document.querySelector(".com-result span");
const button = document.querySelectorAll(".choice-box button");

// Icons
const rock = "&#x270A;";
const paper = "&#x270B;";
const scissors = "&#x270C;";

// Score
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getIcon(choice) {
  if (choice === "rock") return rock;
  if (choice === "paper") return paper;
  if (choice === "scissors") return scissors;
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "DRAW";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "WIN";
  } else {
    return "LOSE";
  }
}

function getScore(result) {
  if (result === "WIN") {
    playerScore++;
  } else if (result === "LOSE") {
    computerScore++;
  }
}

// Looping through each button element
button.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    // Adding start class to main game container to indicate game is in progress
    container.classList.add("start");

    // Setting initial values for player and computer results
    player.innerHTML = "&#x1F91C;";
    computer.innerHTML = "&#x1F91B;";
    info.innerHTML = "Wait...";

    // Delaying the game for 2 seconds to simulate a computer "thinking"
    setTimeout(() => {
      // Removing start class to main game container to indicate game is over
      container.classList.remove("start");

      // Getting player's choice, computer's choice, and game result
      const playerChoice = e.target.id;
      const playerIcon = getIcon(playerChoice);
      const computerChoice = getComputerChoice();
      const computerIcon = getIcon(computerChoice);
      const result = getResult(playerChoice, computerChoice);

      // Updating player and computer results, and game result text
      player.innerHTML = playerIcon;
      computer.innerHTML = computerIcon;
      info.innerHTML = result;

      // Updating player and computer scores
      getScore(result);
      infoPlayerScore.innerHTML = playerScore;
      infoComputerScore.innerHTML = computerScore;
    }, 2000);
  });
});
