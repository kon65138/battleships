import { ship } from './modules/gameClasses.js';

it('does is sunk work', () => {
  let testShip = new ship(5);
  for (let i = 0; i < 5; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBeTruthy();
});
