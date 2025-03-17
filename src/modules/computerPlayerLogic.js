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
export { autoComputerAttack };
