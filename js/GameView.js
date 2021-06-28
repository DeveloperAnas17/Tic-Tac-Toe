export default class GameView {
  constructor() {
    console.log("Init GameView");
  }

  upDateBoard(game) {
    console.log(game.board);
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      console.log(tile);
      tile.textContent = game.board[i];
    }
  }
}
