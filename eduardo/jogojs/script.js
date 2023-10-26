let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function makeMove(row, col) {
  if (board[row][col] === "" && currentPlayer !== null) {
    board[row][col] = currentPlayer;
    document.querySelector("table").rows[row].cells[col].textContent =
      currentPlayer;
    if (checkWinner(currentPlayer)) {
      document.querySelector(
        "h1"
      ).textContent = `Jogador ${currentPlayer} venceu!`;
      currentPlayer = null;
    } else if (boardIsFull()) {
      document.querySelector("h1").textContent = "Empate!";
      currentPlayer = null;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner(player) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }
  return false;
}

function boardIsFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function resetBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
      document.querySelector("table").rows[i].cells[j].textContent = "";
    }
  }
  document.querySelector("h1").textContent = "Jogo da Velha";
  currentPlayer = "X";
}
