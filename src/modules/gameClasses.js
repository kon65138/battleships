class Ship {
  constructor(length, name) {
    this.length = length;
    this.name = name;
  }
  coords = [];
  hits = 0;

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
    return false;
  }
}

class GameBoard {
  constructor(
    ships = [
      new Ship(5, 'Carrier'),
      new Ship(4, 'Battleship'),
      new Ship(3, 'Destroyer'),
      new Ship(3, 'Submarine'),
      new Ship(2, 'Destroyer'),
    ],
  ) {
    this.ships = ships;
  }

  receivedAttacks = [];
  missedAttacks = [];

  placeShip(ship, coOrd, axis = 'x') {
    if (axis === 'y') {
      ship.coords.push(coOrd);
      for (let i = 1; i < ship.length; i++) {
        let tCoords = `${i + parseInt(coOrd.charAt(0))}${coOrd.charAt(1)}`;
        ship.coords.push(tCoords);
      }
    } else if (axis === 'x') {
      ship.coords.push(coOrd);
      for (let i = 1; i < ship.length; i++) {
        let tCoords = `${coOrd.charAt(0)}${i + parseInt(coOrd.charAt(1))}`;
        ship.coords.push(tCoords);
      }
    }
  }

  receiveAttack(coOrds) {
    this.receivedAttacks.push(coOrds);
    for (let ship of this.ships) {
      if (ship.coords.includes(coOrds)) ship.hit();
    }
    this.missedAttacks.push(coOrds);
  }

  allShipsSunk() {
    for (let ship of this.ships) {
      if (ship.isSunk()) return true;
    }
    return false;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }

  gameboard = new GameBoard();
}

export { Ship, GameBoard, Player };
