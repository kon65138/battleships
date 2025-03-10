import { Ship, GameBoard } from './modules/gameClasses.js';

it('does is sunk work', () => {
  let testShip = new Ship(5);
  for (let i = 0; i < 5; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBeTruthy();
});

it('does gameboard placing ship coors work', () => {
  let testShip = new Ship(3);
  let testGameboard = new GameBoard();
  testGameboard.placeShip(testShip, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  expect(testShip.coords).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
});
