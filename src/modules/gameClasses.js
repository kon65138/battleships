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

  placeShip(ship, coOrds) {
    ship.coords = coOrds;
  }

  receiveAttack(coOrds) {
    this.receivedAttacks.push(coOrds);
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].coords.length; j++) {
        if (JSON.stringify(coOrds) === JSON.stringify(this.ships[i].coords[j]))
          this.ships[i].hit();
      }
    }
  }
}
