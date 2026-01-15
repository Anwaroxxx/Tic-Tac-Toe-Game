const blocks = document.querySelectorAll(".parent div");
const resetBtn = document.querySelector(".resetBtn");

let currentPlayer = "X";
let gameOver = false;

function checkWin() {
  if (
    (blocks[0].textContent === currentPlayer &&
      blocks[1].textContent === currentPlayer &&
      blocks[2].textContent === currentPlayer) ||

    (blocks[3].textContent === currentPlayer &&
      blocks[4].textContent === currentPlayer &&
      blocks[5].textContent === currentPlayer) ||

    (blocks[6].textContent === currentPlayer &&
      blocks[7].textContent === currentPlayer &&
      blocks[8].textContent === currentPlayer) ||

    (blocks[0].textContent === currentPlayer &&
      blocks[3].textContent === currentPlayer &&
      blocks[6].textContent === currentPlayer) ||

    (blocks[1].textContent === currentPlayer &&
      blocks[4].textContent === currentPlayer &&
      blocks[7].textContent === currentPlayer) ||

    (blocks[2].textContent === currentPlayer &&
      blocks[5].textContent === currentPlayer &&
      blocks[8].textContent === currentPlayer) ||

    (blocks[0].textContent === currentPlayer &&
      blocks[4].textContent === currentPlayer &&
      blocks[8].textContent === currentPlayer) ||
      
    (blocks[2].textContent === currentPlayer &&
      blocks[4].textContent === currentPlayer &&
      blocks[6].textContent === currentPlayer)
  ) {
    return true;
  }
  return false;
}

function checkDraw() {
  if (
    blocks[0].textContent !== "" &&
    blocks[1].textContent !== "" &&
    blocks[2].textContent !== "" &&
    blocks[3].textContent !== "" &&
    blocks[4].textContent !== "" &&
    blocks[5].textContent !== "" &&
    blocks[6].textContent !== "" &&
    blocks[7].textContent !== "" &&
    blocks[8].textContent !== ""
  ) {
    return true;
  }
  return false;
}

blocks.forEach((block) => {
  block.addEventListener("click", () => {
    if (block.textContent !== "" || gameOver) return;

    block.textContent = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " wins");
      gameOver = true;
      return;
    }

    if (checkDraw()) {
      alert("Draw");
      gameOver = true;
      return;
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    
  });
});

resetBtn.addEventListener("click", () => {
  blocks.forEach((block) => {
    block.textContent = "";
  });

  currentPlayer = "X";
  gameOver = false;
});
