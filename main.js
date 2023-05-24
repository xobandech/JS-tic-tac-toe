function play() {
  let x, y;
  const turn = document.querySelector(".turn");
  let i = 1;
  let active = 1;
  let turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  if (Math.random() > 0.5) {
    turn.innerHTML = "Turn of: X";
    turns = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
  } else {
    turn.innerHTML = "Turn of: O";
  }
  let table = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ];

  document.addEventListener("click", (event) => {
    target = event.target;
    y = target.id.toString().slice(2, 3);
    x = target.id.toString().slice(0, 1);
    if (table[x][y] == '.'){
    if (target.classList.contains("grid-item") && active == 1 ) {
      turn.innerHTML = "Turn of: " + turns[i - 1];
      table[x][y] = turns[i];
      if (checkWinner(table) == "0") {
        active = 0;
        turn.innerHTML = "Draw";
      }
      target.innerHTML = turns[i];
      i++;
      if (checkWinner(table) != null && checkWinner(table) != "0") {
        active = 0;
        turn.innerHTML = `Player ${checkWinner(table)} Wins!`;
      }}
      return
    }
    if (i >= 9) turn.innerHTML = "Draw!"
  });
}
function checkWinner(table) {
  for (let i = 0; i < 3; i++) {
    if (
      table[i][0] !== "." &&
      table[i][0] === table[i][1] &&
      table[i][1] === table[i][2]
    ) {
      return table[i][0];
    }
    if (
      table[0][i] !== "." &&
      table[0][i] === table[1][i] &&
      table[1][i] === table[2][i]
    ) {
      return table[0][i];
    }
  }

  if (
    table[0][0] !== "." &&
    table[0][0] === table[1][1] &&
    table[1][1] === table[2][2]
  ) {
    return table[0][0];
  }
  if (
    table[0][2] !== "." &&
    table[0][2] === table[1][1] &&
    table[1][1] === table[2][0]
  ) {
    return table[0][2];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (table[i][j] === ".") {
        return null;
      }
    }
  }
  return "0";
}

play();


