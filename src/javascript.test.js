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

it('does recieveAttack work as intended', () => {
  let testGameboard = new GameBoard([new Ship(3), new Ship(1)]);
  testGameboard.placeShip(testGameboard.ships[0], [
    [0, 1],
    [0, 2],
    [0, 3],
  ]);
  testGameboard.placeShip(testGameboard.ships[1], [[3, 4]]);
  testGameboard.receiveAttack([3, 4]);
  testGameboard.receiveAttack([0, 2]);
  expect(testGameboard.ships[0].hits).toBe(1);
  expect(testGameboard.ships[1].hits).toBe(1);
  expect(testGameboard.ships[1].isSunk()).toBeTruthy();
});
