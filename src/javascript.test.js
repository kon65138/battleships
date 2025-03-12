import { Ship, GameBoard, Player } from './modules/gameClasses.js';

it('does is sunk work', () => {
  let testShip = new Ship(5);
  for (let i = 0; i < 5; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBeTruthy();
});

it('does gameboard placing ship coors work', () => {
  let testGameboard = new GameBoard([new Ship(3), new Ship(7)]);
  testGameboard.placeShip(testGameboard.ships[0], '00', 'y');
  testGameboard.placeShip(testGameboard.ships[1], '10', 'x');
  expect(testGameboard.ships[0].coords).toEqual(['00', '01', '02']);
  expect(testGameboard.ships[1].coords).toEqual([
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
  ]);
});

it('does recieveAttack work as intended', () => {
  let testGameboard = new GameBoard([new Ship(3), new Ship(1)]);
  testGameboard.placeShip(testGameboard.ships[0], '01', 'y');
  testGameboard.placeShip(testGameboard.ships[1], '34');
  testGameboard.receiveAttack('34');
  testGameboard.receiveAttack('02');
  testGameboard.receiveAttack('55');
  expect(testGameboard.ships[0].hits).toBe(1);
  expect(testGameboard.ships[1].hits).toBe(1);
});

it('does gameboard record missed atatcks', () => {
  let testGameboard = new GameBoard([new Ship(2)]);
  testGameboard.placeShip(testGameboard.ships[0], '01', 'y');
  testGameboard.receiveAttack('03');
  expect(testGameboard.missedAttacks).toContain('03');
});

it('does allShipsSunk gameboard method work', () => {
  let testGameboard = new GameBoard([new Ship(2)]);
  testGameboard.placeShip(testGameboard.ships[0], '01', 'y');
  console.log(testGameboard.ships[0].coords);
  testGameboard.receiveAttack('01');
  console.log(testGameboard.ships[0].hits);
  testGameboard.receiveAttack('02');
  console.log(testGameboard.ships[0].hits);
  expect(testGameboard.allShipsSunk()).toBeTruthy();
});

it('does Player class function as expected', () => {
  let playerOne = new Player('Mr.Blue Sky');
  playerOne.gameboard.placeShip(playerOne.gameboard.ships[4], '01', 'y');
  playerOne.gameboard.receiveAttack('01');
  expect(playerOne.gameboard.ships[4].isSunk()).toBeFalsy;
});
