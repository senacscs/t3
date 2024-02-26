// Player X = 0
// Player O = 1

let currentPlayer = 0;

const circleElement =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>';

const crossElement =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

const messageElement = document.getElementById("message");

let gameState = {};

const possiblePositions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function updateMessage(msg) {
  messageElement.innerHTML = msg;
}

function getElementByPlayer() {
  if (currentPlayer === 0) {
    return crossElement;
  }

  if (currentPlayer === 1) {
    return circleElement;
  }
}

function createGame() {
  // The initial player
  currentPlayer = Math.floor(Math.random() * 2);
  updateMessage(`Vez de ${getElementByPlayer()}`);
}

function validatePlay() {
  let gameEnded = false;
  let winner = -1;

  possiblePositions.forEach((possiblePosition) => {
    if (
      gameState[possiblePosition[0]] === gameState[possiblePosition[1]] &&
      gameState[possiblePosition[1]] === gameState[possiblePosition[2]] &&
      typeof gameState[possiblePosition[1]] === "number"
    ) {
      gameEnded = true;
      winner = gameState[possiblePosition[0]];
    }
  });

  if (!gameEnded) return false;

  updateMessage(`${getElementByPlayer(winner)} venceu`);

  setTimeout(() => {
    gameState = {};
    createGame();
  }, 5000);

  return true;
}

function nextPlayer() {
  // Update the index for the next player
  currentPlayer = currentPlayer === 0 ? 1 : 0;
}

function registerButtons() {
  const buttons = document.querySelectorAll(".button-position");

  buttons.forEach((button) => {
    const index = button.getAttribute("data-index");
    button.addEventListener("click", () => {
      if (typeof gameState[index] === "undefined") {
        gameState[index] = currentPlayer;

        button.innerHTML = getElementByPlayer();

        if (validatePlay()) {
          return;
        }

        nextPlayer();
        updateMessage(`Vez de ${getElementByPlayer()}`);
      }
    });
  });
}

createGame();
registerButtons();
