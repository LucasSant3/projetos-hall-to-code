const $boardList = document.querySelectorAll(".battle-field");
const $resetButton = document.getElementById("reset-button");

let nextSymbol = "X";

function addBoardListeners() {
  for (let index = 0; index < $boardList.length; index++) {
    const $boardItem = $boardList[index];
    $boardItem.addEventListener("click", function () {
      $boardItem.innerHTML = nextSymbol;
      nextSymbol = nextSymbol === "X" ? "O" : "X";
    });
  }

  $resetButton.addEventListener("click", function () {
    for (let index = 0; index < $boardList.length; index++){
      const $boardItem = $boardList[index];
      $boardItem.innerHTML = '';
    }
  });
}

addBoardListeners();
