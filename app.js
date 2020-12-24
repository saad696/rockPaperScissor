const SELECTION = [
  {
    name: "rock",
  },
  {
    name: "paper",
  },
  {
    name: "scissor",
  },
];

const startGameBtn = document.getElementById("start-button");
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
const userSelections = document.querySelectorAll("[id]");
const draw = document.getElementById("score-counter-draw");
const playerScore = document.getElementById("score-counter-player");
const computerScore = document.getElementById("score-counter-computer");

// const ROCK = "ROCK";
// const PAPER = "PAPER";
// const SCISSOR = "SCISSOR";
// const DEFAULT_USER_CHOICE = PAPER;
// const PLAYER_WON = "PLAYER WON";
// const COMPUTER_WON = "COMPUTER WON";
// const DRAW = "DRAW";

userSelections.forEach((userSelections) => {
  userSelections.addEventListener("click", (e) => {
    const userSelectionName = userSelections.id;
    const selection = SELECTION.find(
      (selection) => selection.name === userSelectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = getComputerSelection();
  // const youWinner = isWinner(selection, computerSelection);
  // const computerWinner = isWinner(computerSelection, selection);
  isWinner(selection, computerSelection);
  console.log("player selection:", selection);
  console.log("computer selection:", computerSelection);
}

const getComputerSelection = () => {
  let computerChoice = Math.floor(Math.random() * SELECTION.length);
  if (computerChoice === 0) {
    computerImg.src = "images/rock1.png";
    return SELECTION[computerChoice];
  } else if (computerChoice === 1) {
    computerImg.src = "images/paper2.png";
    return SELECTION[computerChoice];
  } else {
    computerImg.src = "images/scissor3.png";
    return SELECTION[computerChoice];
  }
};

function isWinner(selection, oponentSelection) {
  // return selection.beats === oponentSelection.name;
  let resetCounter = 0;

  if (selection.name === oponentSelection.name) {
    // alert("its a draw");
    document.getElementById("show-winner").innerText = "Draw";
    draw.innerText = parseInt(draw.innerText) + 1;
  } else if (
    (selection.name === "rock" && oponentSelection.name === "scissor") ||
    (selection.name === "paper" && oponentSelection.name === "rock") ||
    (selection.name === "scissor" && oponentSelection.name === "paper")
  ) {
    // alert("player wins");
    document.getElementById("show-winner").innerText = "Player wins";
    resetCounter = playerScore.innerText = parseInt(playerScore.innerText) + 1;
    playerScoreCounter = resetCounter;
    if(resetCounter === 10){
      alert(`You are the winner`)
    }

  } else {
    // alert("computer wins");
    document.getElementById("show-winner").innerText = "Computer wins";
    resetCounter = computerScore.innerText = parseInt(computerScore.innerText) + 1;
    computerScoreCounter = resetCounter;
    if(resetCounter === 10){
      alert(`computer is the winner`)
    }

  }
  if(resetCounter >= 10){
    draw.innerText = 0;
    playerScore.innerText = 0;
    computerScore.innerText = 0;
  }
}

// function scoreCounter(scoreSpan) {

// }

const rockSelection = () => {
  playerImg.src = "images/rock1.png";
};

const paperSelection = () => {
  playerImg.src = "images/paper2.png";
};

const scissorSelection = () => {
  playerImg.src = "images/scissor3.png";
};

// const getUserChoice = (selection) => {
//   let userSelection = selection

//   if (
//     userSelection !== rock &&
//     userSelection !== paper &&
//     userSelection !== scissor
//   ) {
//     alert(`Invalid choice, we selected ${paper} for you`);
//     return DEFAULT_USER_CHOICE;
//   }
//   return userSelection;
// };

// //arrow functions
// const getWinner = (cChoice, pChoice) => {
//   return cChoice === pChoice ? DRAW :
//       (pChoice === rock && cChoice === scissor) ||
//       (pChoice === paper && cChoice === rock) ||
//       (pChoice === scissor && cChoice === paper)
//     ? PLAYER_WON : COMPUTER_WON;
// };

//   if (pChoice === cChoice) {
//     return DRAW;
//   } else if (
//     (pChoice === ROCK && cChoice === SCISSOR) ||
//     (pChoice === PAPER && cChoice === ROCK) ||
//     (pChoice === SCISSOR && cChoice === PAPER)
//   ) {
//       return PLAYER_WON;

//   } else {
//       return COMPUTER_WON;
//   }

// startGameBtn.addEventListener("click", () => {
//   if (gameIsRunning) {
//     return;
//   }

//   gameIsRunning = true;

//   console.log("Starting Game....");
//   const playerSelection = getUserChoice();
//   const computerSelection = getComputerSelection();
//   const winner = getWinner(computerSelection, playerSelection);
//   let message = `you picked ${playerSelection} and computer picked ${computerSelection} therefore you, `;
//   if(winner === DRAW){
//       message += "Had a draw";
//   }else if(winner === PLAYER_WON){
//       message += "Won";
//   }else{
//       message += "Lost"
//   }
//   alert(message);
//   console.log(winner);
//   gameIsRunning = false;
// });
