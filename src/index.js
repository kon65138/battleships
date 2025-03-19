import './style.css';
import { Ship, GameBoard, Player } from './modules/gameClasses.js';
import {
  createGrid,
  recPlaceShips,
  renderShips,
  renderShots,
} from './modules/domFunctions.js';
import { autoComputerAttack } from './modules/computerPlayerLogic.js';

function newGame() {
  const player = new Player('test player');
  const computer = new Player('bzz beep', true);
  computer.gameboard.oppolentsTurn = true;

  createGrid(computer, 'computerGrid', player);
  createGrid(player, 'playerGrid', computer);

  recPlaceShips(player.gameboard.ships, player.gameboard);

  computer.gameboard.placeShip(computer.gameboard.ships[0], '00', 'y');
  computer.gameboard.placeShip(computer.gameboard.ships[1], '90', 'x');
  computer.gameboard.placeShip(computer.gameboard.ships[2], '41', 'x');
  computer.gameboard.placeShip(computer.gameboard.ships[3], '09', 'y');
  computer.gameboard.placeShip(computer.gameboard.ships[4], '67', 'x');

  renderShips(player.gameboard, 'playerGrid');
}

newGame();
