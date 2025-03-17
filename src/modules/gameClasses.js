class Ship {
  constructor(length, name, color) {
    this.length = length;
    this.name = name;
    this.color = color;
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
      new Ship(5, 'Carrier', 'red'),
      new Ship(4, 'Battleship', 'blue'),
      new Ship(3, 'Cruiser', 'green'),
      new Ship(3, 'Submarine', 'yellow'),
      new Ship(2, 'Destroyer', 'purple'),
    ],
    isComputer,
  ) {
    this.ships = ships;
    this.isComputer = isComputer;
  }

  receivedAttacks = [];
  missedRecievedAttacks = [];
  hitRecievedAttacks = [];
  sentAttacks = [];
  oppolentsGameboard;

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
  sendAttack(coOrds) {
    if (this.sentAttacks.includes(coOrds)) return false;
    this.sentAttacks.push(coOrds);
    return true;
  }

  receiveAttack(coOrds) {
    this.receivedAttacks.push(coOrds);
    for (let ship of this.ships) {
      if (ship.coords.includes(coOrds)) {
        ship.hit();
        this.hitRecievedAttacks.push(coOrds);

        if (this.isComputer === true) this.autoComputerAttack();
        return true;
      }
    }
    this.missedRecievedAttacks.push(coOrds);
    if (this.isComputer === true) this.autoComputerAttack();
    return false;
  }

  allShipsSunk() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }

  gameboard = new GameBoard();
}

export { Ship, GameBoard, Player };
