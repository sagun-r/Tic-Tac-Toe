Gameboard = () => {
  const rows = 3;
  const columns = 3;
  const gameboard = [];

  for (i = 0; i < rows; i++) {
    gameboard.push([]);
    for (j = 0; j < columns; j++) {
      gameboard[i].push(Space());
    }
  }

  const getGameboard = () => gameboard;

  const putSymbol = (column, player) => {};

  return { getGameboard };
};

Space = () => {
  let value = 0;
  const getValue = () => value;
  const getSymbol = () => activePlayer.symbol;
  return { getValue, getSymbol };
};

const GameController = (playerOneName = "Player One", playerTwoName = "Player Two") => {
  // const gameboard = Gameboard();

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
  activePlayer = players[0];

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

    const gameboard = Gameboard().getGameboard();

    gameboard.forEach((row) => {
      row.forEach((space, index) => {
        const divBtn = document.createElement("button");

        // divBtn.textContent = space.getValue();
        console.log(space);
        console.log(index);
        divBoard.append(divBtn);
        divBtn.addEventListener("click", () => {
          alert(space.getSymbol());
        });
      });
    });

    console.log(gameboard);
    activePlayer = game.getActivePlayer();

    whosTurn.textContent = `${activePlayer.name}'s turn.`;

    console.log(activePlayer.name);
  };
  updateScreen();
  // game.switchPlayer();
  activePlayer = game.getActivePlayer();
  whosTurn.textContent = `${activePlayer.name}'s turn.`;
};

ScreenController();
