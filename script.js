const Gameboard = () => {
  const rows = 3;
  const columns = 3;
  const gameboard = [];

  const players = {
    playerOne: "Player One",
    playerTwo: "Player Two",
  };

  for (i = 0; i < rows; i++) {
    gameboard.push([]);
    for (j = 0; j < columns; j++) {
      gameboard[i].push("test");
    }
  }
  console.table(gameboard);
};

const GameController = () => {};

Gameboard();
