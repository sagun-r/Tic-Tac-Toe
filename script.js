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

  const putSymbol = (row, col, player) => {
    gameboard[row][col].setValue(player.symbol);
    console.log(gameboard[row][col].getValue());
    console.table(gameboard);
  };

  return { getGameboard, putSymbol };
};

Space = () => {
  let value = 0;
  const getValue = () => value;
  const getSymbol = () => (value ? value : activePlayer.symbol);
  const setValue = (symbol) => {
    value = symbol;
  };
  return { getValue, getSymbol, setValue };
};

const GameController = (playerOneName = "Player One", playerTwoName = "Player Two") => {
  const gameboard = Gameboard();

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
    gameboard,
  };
};

const ScreenController = () => {
  const whosTurn = document.querySelector(".whos-turn");
  const divBoard = document.querySelector(".board");

  const game = GameController();

  const updateScreen = () => {
    divBoard.textContent = "";

    const gameboard = game.gameboard.getGameboard();

    gameboard.forEach((row, rowIndex) => {
      row.forEach((space, colIndex) => {
        const divBtn = document.createElement("button");
        divBtn.textContent = space.getValue() ? space.getValue() : "";
        divBoard.append(divBtn);
        whosTurn.textContent = `${game.getActivePlayer().name} (${game.getActivePlayer().symbol})'s turn.`;
        divBtn.addEventListener("click", (e) => {
          console.log(game.gameboard.getGameboard());
          if (e.target.textContent == "") {
            e.target.textContent = game.getActivePlayer().symbol;
            game.gameboard.putSymbol(rowIndex, colIndex, game.getActivePlayer());
            game.switchPlayer();
            whosTurn.textContent = `${activePlayer.name} (${activePlayer.symbol})'s turn.`;
          }
        });
      });
    });
  };
  updateScreen();
  whosTurn.textContent = `${game.getActivePlayer().name} (${game.getActivePlayer().symbol})'s turn.`;
};

//     console.log(gameboard);
//     activePlayer = game.getActivePlayer();

//     console.log(activePlayer.name);
//   };
//   updateScreen();
//   activePlayer = game.getActivePlayer();
//   whosTurn.textContent = `${activePlayer.name} (${activePlayer.symbol})'s turn.`;
// };

ScreenController();
