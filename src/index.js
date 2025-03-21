import './style.css';
import { Player } from './modules/gameClasses.js';
import {
  createGrid,
  recPlaceShips,
  renderShips,
} from './modules/domFunctions.js';
import { computerRandShipPlace } from './modules/computerPlayerLogic.js';

function newGame() {
  const player = new Player('test player');
  const computer = new Player('bzz beep', true);
  computer.gameboard.oppolentsTurn = true;

  createGrid(computer, 'computerGrid', player);
  createGrid(player, 'playerGrid', computer);

  recPlaceShips(player.gameboard.ships, player.gameboard);
  computerRandShipPlace(computer.gameboard.ships, computer.gameboard);

  renderShips(player.gameboard, 'playerGrid');
}

const startGameBtn = document.getElementById('StartNewGame');
startGameBtn.addEventListener('click', () => {
  location.reload();
});

newGame();
