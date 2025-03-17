import {
  autoComputerAttack,
  computerAttackSequence,
} from './computerPlayerLogic';

const gameOutput = document.querySelector('.gameOutput');

function createGrid(player, divClassName, oppolentPlayer) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const grid = document.querySelector(`.${divClassName}`);
  for (let i = 0; i < 10; i++) {
    let xAxisDiv = document.createElement('div');
    xAxisDiv.classList.add(`xGroup`);
    xAxisDiv.classList.add(`${i}`);
    grid.appendChild(xAxisDiv);
    for (let j = 0; j < 10; j++) {
      let square = document.createElement('button');
      square.textContent = `${alphabet.charAt(i)}${j}`;
      square.classList.add('square');
      square.id = `${divClassName}${i}${j}`;
      xAxisDiv.appendChild(square);
      if (divClassName === 'computerGrid') {
        square.addEventListener('click', () => {
          if (gameOutput.textContent === 'computers turn') return;
          if (
            gameOutput.textContent === 'Player Wins!!!' ||
            gameOutput.textContent === 'Player Loses.'
          ) {
            return;
          }
          if (oppolentPlayer.gameboard.sendAttack(`${i}${j}`)) {
            player.gameboard.receiveAttack(`${i}${j}`);
            renderShots(player.gameboard, divClassName);
            if (player.gameboard.allShipsSunk()) {
              gameOutput.textContent = 'Player Wins!!!';
              return;
            }
            computerAttackSequence(player, oppolentPlayer, renderShots);
            if (oppolentPlayer.gameboard.allShipsSunk()) {
              gameOutput.textContent = 'Player Loses.';
              return;
            }
          }
        });
      }
    }
  }
}

function renderShips(gameboard, divClassName) {
  for (let ship of gameboard.ships) {
    for (let coord of ship.coords) {
      let square = document.getElementById(`${divClassName}${coord}`);
      square.style.backgroundColor = ship.color;
    }
  }
}

function renderShots(gameboard, divClassName) {
  for (let attack of gameboard.receivedAttacks) {
    let square = document.getElementById(`${divClassName}${attack}`);
    if (square.children.length > 0) continue;
    let x = document.createElement('div');
    x.textContent = 'X';
    if (gameboard.hitRecievedAttacks.includes(attack)) {
      x.classList.add('hit');
    } else {
      x.classList.add('missed');
    }
    square.appendChild(x);
  }
}

function shipVisualize(ship, rotation) {}

export { createGrid, renderShips, renderShots };
