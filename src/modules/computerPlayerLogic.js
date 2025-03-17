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
export { autoComputerAttack, computerAttackSequence };
