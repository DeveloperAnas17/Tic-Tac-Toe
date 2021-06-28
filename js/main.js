import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", (e) => {
  console.log("New Game");
  onRestartClick();
});

let titles = document.querySelectorAll(".board-tile");
titles.forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameView.upDateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameView.upDateBoard(game);
}

gameView.upDateBoard(game);
