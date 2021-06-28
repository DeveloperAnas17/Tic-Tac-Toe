import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

let titles = document.querySelectorAll(".board-tile");
titles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  // do something
  // make a move
  game.makeMove(i);
  // updateBoard
  gameView.upDateBoard(game);
  // change turn
  //   game.nextTurn();
}
