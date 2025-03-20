function autoComputerAttack(computer) {
  let coord = randCoord();
  while (computer.gameboard.sentAttacks.includes(coord)) {
    coord = randCoord();
  }
  return coord;
}

function randCoord() {
  let coord = '';
  coord += Math.floor(Math.random() * 10);
  coord += Math.floor(Math.random() * 10);
  return coord;
}

function computerAttackSequence(player, oppolentPlayer, renderShots) {
  const gameOutput = document.querySelector('.gameOutput');
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

function computerRandShipPlace(ships, gameboard) {
  if (gameboard.placedShips.length === gameboard.ships.length) {
    return;
  }
  function recCollisionCheck(coord, ship, axis, num = 0) {
    if (num === ship.length) return false;
    let tempArr = coord.split('');
    if (coord.length > 2) return true;
    if (axis === 'x') {
      tempArr[1] = parseInt(tempArr[1]) + 1;
    } else {
      tempArr[0] = parseInt(tempArr[0]) + 1;
    }
    for (let curShip of gameboard.placedShips) {
      for (let pos of curShip.coords) {
        if (pos === coord) return true;
      }
    }
    return recCollisionCheck(tempArr.join(''), ship, axis, num + 1);
  }
  function recValidCoordMaker(axis) {
    let coord = randCoord();
    if (!recCollisionCheck(coord, ships[0], axis)) {
      return coord;
    }
    return recValidCoordMaker(axis);
  }
  let zeroOrOne = Math.floor(Math.random() * 2);
  let axis;
  if (zeroOrOne > 0) {
    axis = 'x';
  } else {
    axis = 'y';
  }

  let workingCoord = recValidCoordMaker(axis);

  gameboard.placeShip(ships[0], workingCoord, axis);
  let temp = ships.slice();
  temp.shift();
  return computerRandShipPlace(temp, gameboard);
}
export { autoComputerAttack, computerAttackSequence, computerRandShipPlace };
