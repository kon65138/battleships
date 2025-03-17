import { autoComputerAttack } from './computerPlayerLogic';

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
          if (oppolentPlayer.gameboard.sendAttack(`${i}${j}`)) {
            player.gameboard.receiveAttack(`${i}${j}`);
            renderShots(player.gameboard, divClassName);
            computerAttackSequence(player, oppolentPlayer);
          }
        });
      }
    }
  }
}

function computerAttackSequence(player, oppolentPlayer) {
  let computerThinkingTime = Math.floor(Math.random() * 3);
  gameOutput.textContent = 'computers turn';
  setTimeout(() => {
    player.gameboard.sendAttack(autoComputerAttack(player));
    oppolentPlayer.gameboard.receiveAttack(
      player.gameboard.sentAttacks[player.gameboard.sentAttacks.length - 1],
    );
    renderShots(oppolentPlayer.gameboard, 'playerGrid');
    gameOutput.textContent = 'players turn';
  }, computerThinkingTime * 1000);
}

function renderShips(gameboard, divClassName) {
  for (let ship of gameboard.ships) {
    let color;
    switch (ship.name) {
      case 'Carrier':
        color = 'red';
        break;
      case 'Battleship':
        color = 'blue';
        break;
      case 'Cruiser':
        color = 'green';
        break;
      case 'Submarine':
        color = 'yellow';
        break;
      case 'Destroyer':
        color = 'purple';
        break;
    }
    for (let coord of ship.coords) {
      let square = document.getElementById(`${divClassName}${coord}`);
      square.style.backgroundColor = color;
    }
  }
}

function renderShots(gameboard, divClassName) {
  for (let attack of gameboard.receivedAttacks) {
    let square = document.getElementById(`${divClassName}${attack}`);
    if (square.children.length > 0) continue;
    let x = document.createElement('div');
    x.textContent = 'X';
    x.classList.add('hit');
    square.appendChild(x);
  }
}

export { createGrid, renderShips, renderShots };
