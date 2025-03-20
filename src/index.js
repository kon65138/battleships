import './style.css';
import { Ship, GameBoard, Player } from './modules/gameClasses.js';
import {
  createGrid,
  recPlaceShips,
  renderShips,
  renderShots,
} from './modules/domFunctions.js';
import {
  autoComputerAttack,
  computerRandShipPlace,
} from './modules/computerPlayerLogic.js';

function newGame() {
  const player = new Player('test player');
  const computer = new Player('bzz beep', true);
  computer.gameboard.oppolentsTurn = true;

  createGrid(computer, 'computerGrid', player);
  createGrid(player, 'playerGrid', computer);

  recPlaceShips(player.gameboard.ships, player.gameboard);
  computerRandShipPlace(computer.gameboard.ships, computer.gameboard);

  renderShips(player.gameboard, 'playerGrid');
  renderShips(computer.gameboard, 'computerGrid');
}

newGame();
