Gameboard = () => {
  const rows = 3;
  const columns = 3;
  const gameboard = [];

  const getGameboard = () => gameboard;

  for (i = 0; i < rows; i++) {
    gameboard.push([]);
    for (j = 0; j < columns; j++) {
      gameboard[i].push(Spaces());
    }
  }
  return { getGameboard };
};

Spaces = () => {
  const doSomething = () => {};
  const doSomethingElse = () => {};
  return { doSomething, doSomethingElse };
};

const GameController = (playerOneName = "Player One", playerTwoName = "Player Two") => {
  const players = [
    {
      name: playerOneName,
      symbol: "X",
    },
    {
      name: playerTwoName,
      symbol: "O",
    },
  ];
  //Set initial player
  const activePlayer = players[0];

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  return {
    switchPlayer,
    getActivePlayer,
  };
};

const ScreenController = () => {
  const whosTurn = document.querySelector(".whos-turn");
  const divBoard = document.querySelector(".board");

  const game = GameController();

  const updateScreen = () => {
    divBoard.textContent = "";

    const gameboard = Gameboard().getGameboard;
    const activePlayer = game.getActivePlayer();

    whosTurn.textContent = `${activePlayer.name}'s turn.`;
  };
  updateScreen();
};

ScreenController();
