const Gameboard = () => {
  const rows = 3;
  const columns = 3;
  const board = [];

  const players = [
    (PlayerOne = {
      name: "Player One",
      symbol: "X",
    }),
    (PlayerTwo = {
      name: "Player Two",
      symbol: "O",
    }),
  ];

  for (i = 0; i < rows; i++) {
    board.push([]);
    for (j = 0; j < columns; j++) {
      board[i].push(Spaces());
    }
  }
  console.table(board);
};

(Spaces = () => {
  const doSomething = () => {};
  const doSomethingElse = () => {};
  return { doSomething, doSomethingElse };
})();

Gameboard();

const GameController = () => {
  //Initial
  const activePlayer = players[0];
  console.log(players[0]);
  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
};
