export class ship {
  constructor(length) {
    this.length = length;
  }

  hits = 0;

  hit() {
    this.hits++;
  }

  isSunk() {
    if (this.hits >= this.length) return true;
  }
}
