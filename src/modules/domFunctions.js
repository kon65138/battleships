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
          if (gameOutput.textContent !== 'players turn') return;
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

function recPlaceShips(ships, gameboard) {
  if (ships.length < 1) return;
  let tempShipsArr = ships.slice();
  const grid = document.querySelector('.playerGrid');
  gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} vertically extending down from the position. press r to cycle horizontal/vertical`;
  let choice = '';
  let rotation = '';
  function onRFunction(event) {
    if (event.key === 'r') {
      if (gameOutput.textContent === 'not enough room to place ship') return;
      if (gameOutput.textContent.includes('down')) {
        gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} horizontally extending right from the position. press r to cycle horizontal/vertical`;
      } else {
        gameOutput.textContent = `click a position on the player grid to place your ${ships[0].length} square long ${ships[0].name} vertically extending down from the position. press r to cycle horizontal/vertical`;
      }
    }
  }
  document.addEventListener('keypress', onRFunction);
  function eventListener(event) {
    let cssObj = window.getComputedStyle(event.currentTarget, null);
    if (cssObj.getPropertyValue('background-color') !== 'rgb(0, 105, 237)') {
      return;
    }
    function recCollisionCheck(coord, ship, num = 0) {
      if (num === ship.length - 1) return false;
      let tempArr = coord.split('');
      if (gameOutput.textContent.includes('down')) {
        tempArr[1] = parseInt(tempArr[1]) + 1;
        let curCssObj = window.getComputedStyle(
          document.getElementById(`playerGrid${tempArr.join('')}`),
          null,
        );
        if (
          curCssObj.getPropertyValue('background-color') !== 'rgb(0, 105, 237)'
        ) {
          return true;
        }
      } else {
        tempArr[0] = parseInt(tempArr[0]) + 1;
        let curCssObj = window.getComputedStyle(
          document.getElementById(`playerGrid${tempArr.join('')}`),
          null,
        );
        if (
          curCssObj.getPropertyValue('background-color') !== 'rgb(0, 105, 237)'
        ) {
          return true;
        }
      }
      recCollisionCheck(tempArr.join(''), ship, num + 1);
    }

    choice = event.currentTarget.id.slice(10, 12);
    if (recCollisionCheck(choice, ships[0])) {
      let temp = gameOutput.textContent;
      gameOutput.textContent = 'not enough room to place ship';
      setTimeout(() => {
        gameOutput.textContent = temp;
      }, 1000);
      return;
    }
    if (gameOutput.textContent.includes('down')) {
      rotation = 'x';
      if (ships[0].length + parseInt(choice.slice(1, 2)) > 10) {
        let temp = gameOutput.textContent;
        gameOutput.textContent = 'not enough room to place ship';
        setTimeout(() => {
          gameOutput.textContent = temp;
        }, 1000);
        return;
      }
    } else {
      rotation = 'y';
      if (ships[0].length + parseInt(choice.slice(0, 1)) > 10) {
        let temp = gameOutput.textContent;
        gameOutput.textContent = 'not enough room to place ship';
        setTimeout(() => {
          gameOutput.textContent = temp;
        }, 1000);
        return;
      }
    }
    gameboard.placeShip(ships[0], choice, rotation);
    renderShips(gameboard, 'playerGrid');
    removeEventLisners();
    tempShipsArr.shift();
    recPlaceShips(tempShipsArr, gameboard);
  }
  for (let gridLine of grid.children) {
    for (let square of gridLine.children) {
      square.addEventListener('click', eventListener);
    }
  }
  function removeEventLisners() {
    document.removeEventListener('keypress', onRFunction);
    for (let gridLine of grid.children) {
      for (let square of gridLine.children) {
        square.removeEventListener('click', eventListener);
      }
    }
    gameOutput.textContent = 'players turn';
  }
}

export { createGrid, renderShips, renderShots, recPlaceShips };
