import './style.css';
import { Ship, GameBoard, Player } from './modules/gameClasses.js';
import {
  createGrid,
  renderShips,
  renderShots,
} from './modules/domFunctions.js';

function newGame() {
  const player = new Player('test player');
  const computer = new Player('bzz beep');

  createGrid(computer.gameboard, 'computerGrid');
  createGrid(player.gameboard, 'playerGrid');

  player.gameboard.placeShip(player.gameboard.ships[0], '00', 'y');
  player.gameboard.placeShip(player.gameboard.ships[1], '90', 'x');
  player.gameboard.placeShip(player.gameboard.ships[2], '41', 'x');
  player.gameboard.placeShip(player.gameboard.ships[3], '09', 'y');
  player.gameboard.placeShip(player.gameboard.ships[4], '67', 'x');

  computer.gameboard.placeShip(computer.gameboard.ships[0], '00', 'y');
  computer.gameboard.placeShip(computer.gameboard.ships[1], '90', 'x');
  computer.gameboard.placeShip(computer.gameboard.ships[2], '41', 'x');
  computer.gameboard.placeShip(computer.gameboard.ships[3], '09', 'y');
  computer.gameboard.placeShip(computer.gameboard.ships[4], '67', 'x');

  renderShips(player.gameboard, 'playerGrid');
  renderShips(computer.gameboard, 'computerGrid');
}

newGame();
