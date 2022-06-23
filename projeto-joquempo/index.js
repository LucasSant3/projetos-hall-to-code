const $rockButton1 = document.querySelector(".button-rock-1");
const $paperButton1 = document.querySelector(".button-paper-1");
const $scissorsButton1 = document.querySelector(".button-scissors-1");

const $rockButton2 = document.querySelector(".button-rock-2");
const $paperButton2 = document.querySelector(".button-paper-2");
const $scissorsButton2 = document.querySelector(".button-scissors-2");

const $battleAction1 = document.querySelector(".battle-action-1");
const $battleAction2 = document.querySelector(".battle-action-2");

const $winnerTitle = document.querySelector(".title");

const $scorePlayer1 = document.querySelector(".score-player-1");
const $scorePlayer2 = document.querySelector(".score-player-2");

const $buttonReset = document.querySelector(".button-reset");
const $buttonStart = document.querySelector(".button-start");

let movePlayer1 = "";
let movePlayer2 = "";
let gameResult = null;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let gameStart = false;

function verifyWinner() {
  if (movePlayer1 == "rock" && movePlayer2 == "paper") {
    gameResult = 2;
  }
  if (movePlayer1 == "rock" && movePlayer2 == "scissors") {
    gameResult = 1;
  }
  if (movePlayer1 == "paper" && movePlayer2 == "rock") {
    gameResult = 1;
  }
  if (movePlayer1 == "paper" && movePlayer2 == "scissors") {
    gameResult = 2;
  }
  if (movePlayer1 == "scissors" && movePlayer2 == "rock") {
    gameResult = 2;
  }
  if (movePlayer1 == "scissors" && movePlayer2 == "paper") {
    gameResult = 1;
  }
  if (movePlayer1 == movePlayer2) {
    gameResult = 0;
  }
}

function printGameResult() {
  if (gameResult == 1) {
    $winnerTitle.innerHTML = "Jogador 1 Venceu!";
  }
  if (gameResult == 2) {
    $winnerTitle.innerHTML = "Jogador 2 Venceu!";
  }
  if (gameResult == 0) {
    $winnerTitle.innerHTML = "Empatou!";
  }
}

function resetBattleField() {
  $battleAction1.innerHTML = "";
  $battleAction2.innerHTML = "";
}

function resetMoveVariables() {
  movePlayer1 = "";
  movePlayer2 = "";
}

function resetStartButton() {
  $buttonStart.innerHTML = "Iniciar";
  $buttonStart.classList.remove("start");
  gameStart = false;
}

function printScoreBoard() {
  $scorePlayer1.innerHTML = scorePlayer1.toString().padStart(2, "0");
  $scorePlayer2.innerHTML = scorePlayer2.toString().padStart(2, "0");
}

function addPoint(winnerNumber) {
  if (winnerNumber == 1) {
    scorePlayer1++;
  }
  if (winnerNumber == 2) {
    scorePlayer2++;
  }
}

function resetScoreBoard() {
  $scorePlayer1.innerHTML = "00";
  $scorePlayer2.innerHTML = "00";
}

function resetScoreVariables() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}

function move(moveName, fieldNumber) {
  if (gameStart) {
    if (fieldNumber == 1) {
      $battleAction1.innerHTML =
        '<img class="image" src=" ' + moveName + '.png">';
      movePlayer1 = moveName;
    } else if (fieldNumber == 2) {
      $battleAction2.innerHTML =
        '<img class="image" src=" ' + moveName + '.png">';
      movePlayer2 = moveName;
    }
    verifyWinner();
    printGameResult();
    if (gameResult != null) {
      setTimeout(resetBattleField, 2000);
      resetMoveVariables();
      addPoint(gameResult);
      printScoreBoard();
      gameResult = null;
    }
  }
}

$rockButton1.addEventListener("click", function () {
  move("rock", 1);
});

$paperButton1.addEventListener("click", function () {
  move("paper", 1);
});

$scissorsButton1.addEventListener("click", function () {
  move("scissors", 1);
});

$rockButton2.addEventListener("click", function () {
  move("rock", 2);
});

$paperButton2.addEventListener("click", function () {
  move("paper", 2);
});

$scissorsButton2.addEventListener("click", function () {
  move("scissors", 2);
});

$buttonReset.addEventListener("click", function () {
  resetBattleField();
  resetMoveVariables();
  gameResult = null;
  resetScoreBoard();
  $winnerTitle.innerHTML = "Resultado";
  resetScoreVariables();
  resetStartButton();
});

$buttonStart.addEventListener("click", function () {
  gameStart = !gameStart;

  $buttonStart.classList.toggle("start");

  if (gameStart) {
    $buttonStart.innerHTML = "Pausar";
  } else {
    $buttonStart.innerHTML = "Iniciar";
  }
});
