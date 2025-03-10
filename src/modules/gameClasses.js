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
