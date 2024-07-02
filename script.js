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

const GameController = (playerOne = "PLAYER 1", playerTwo = "PLAYER 2") => {
  const gameboard = Gameboard();

  const players = [
    {
      name: playerOne,
      symbol: "X",
    },
    {
      name: playerTwo,
      symbol: "O",
    },
  ];
  // if (players[0].name == null || player[1].name == null) {
  //   players[0].name = "";
  //   players[1].name = "";
  // }
  //Set initial player
  activePlayer = players[0];

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const isWinner = (turn) => {
    const playingSpaces = document.querySelectorAll(".playing-space");
    if (
      //X across first row
      (gameboard.getGameboard()[0][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[0][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[0][2].getValue() == players[0].symbol) ||
      //X across second row
      (gameboard.getGameboard()[1][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][2].getValue() == players[0].symbol) ||
      //X across third row
      (gameboard.getGameboard()[2][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[0].symbol) ||
      //X across top left to bottom right
      (gameboard.getGameboard()[0][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[0].symbol) ||
      //X across top bottom left to top right
      (gameboard.getGameboard()[2][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[0][2].getValue() == players[0].symbol) ||
      //X across first column
      (gameboard.getGameboard()[0][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][0].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][0].getValue() == players[0].symbol) ||
      //X across second column
      (gameboard.getGameboard()[0][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][1].getValue() == players[0].symbol) ||
      //X across third column
      (gameboard.getGameboard()[0][2].getValue() == players[0].symbol &&
        gameboard.getGameboard()[1][2].getValue() == players[0].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[0].symbol)
    ) {
      setTimeout(() => {
        alert(players[0].name + " Wins!");
      }, 100);
      //disables buttons
      for (const playingSpace of playingSpaces) {
        playingSpace.disabled = true;
      }
    } else if (
      //O across first row
      (gameboard.getGameboard()[0][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[0][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[0][2].getValue() == players[1].symbol) ||
      //O across second row
      (gameboard.getGameboard()[1][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][2].getValue() == players[1].symbol) ||
      //O across third row
      (gameboard.getGameboard()[2][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[1].symbol) ||
      //O across top left to bottom right
      (gameboard.getGameboard()[0][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[1].symbol) ||
      //O across top bottom left to top right
      (gameboard.getGameboard()[2][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[0][2].getValue() == players[1].symbol) ||
      //O across first column
      (gameboard.getGameboard()[0][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][0].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][0].getValue() == players[1].symbol) ||
      //O across second column
      (gameboard.getGameboard()[0][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][1].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][1].getValue() == players[1].symbol) ||
      //O across third column
      (gameboard.getGameboard()[0][2].getValue() == players[1].symbol &&
        gameboard.getGameboard()[1][2].getValue() == players[1].symbol &&
        gameboard.getGameboard()[2][2].getValue() == players[1].symbol)
    ) {
      setTimeout(() => {
        alert(players[1].name + " Wins!");
      }, 100);
      //disables buttons
      for (const playingSpace of playingSpaces) {
        playingSpace.disabled = true;
      }
    } else if (turn == 9) {
      setTimeout(() => {
        alert("Its a draw");
      }, 100);
      //disables buttons
      for (const playingSpace of playingSpaces) {
        playingSpace.disabled = true;
      }
    }
  };

  return {
    switchPlayer,
    getActivePlayer,
    gameboard,
    isWinner,
  };
};

const ScreenController = () => {
  let turn = 0;

  const whosTurn = document.querySelector(".whos-turn");
  const divBoard = document.querySelector(".board");
  const resetBtn = document.querySelector(".resetBtn");

  resetBtn.addEventListener("click", () => {
    turn = 0;
    const gameboard = game.gameboard.getGameboard();
    gameboard.forEach((row) => {
      row.forEach((space) => {
        space.setValue("");
      });
    });
    ScreenController();
  });

  const game = GameController();

  const updateScreen = () => {
    divBoard.textContent = "";

    const gameboard = game.gameboard.getGameboard();

    gameboard.forEach((row, rowIndex) => {
      row.forEach((space, colIndex) => {
        const divBtn = document.createElement("button");
        divBtn.className = "playing-space";
        divBtn.textContent = space.getValue() ? space.getValue() : "";
        divBoard.append(divBtn);
        whosTurn.textContent = `${game.getActivePlayer().name} (${game.getActivePlayer().symbol})'s turn`;
        divBtn.addEventListener("click", (e) => {
          if (e.target.textContent == "") {
            turn++;
            e.target.textContent = game.getActivePlayer().symbol;
            game.gameboard.putSymbol(rowIndex, colIndex, game.getActivePlayer());
            game.switchPlayer();
            whosTurn.textContent = `${activePlayer.name} (${activePlayer.symbol})'s turn`;
            game.isWinner(turn);
          }
        });
      });
    });
  };
  updateScreen();
};

ScreenController();
