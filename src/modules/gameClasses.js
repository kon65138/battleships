export class Ship {
  constructor(length) {
    this.length = length;
  }
  coords = [];
  hits = 0;

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
  }
}

export class GameBoard {
  constructor(ships) {
    this.ships = ships;
  }

  receivedAttacks = [];
  missedAttacks = [];

  placeShip(ship, coOrds) {
    ship.coords = coOrds;
  }

  receiveAttack(coOrds) {
    this.receivedAttacks.push(coOrds);
    for (let ship of this.ships) {
      if (ship.coords.includes(coOrds)) ship.hit();
    }
    this.missedAttacks.push(coOrds);
  }
}
