const ship = require('../src/shipFactory');

test('test ship length', () => {
  const builtShip = ship(5, 'Battleship', false);
  expect(builtShip.lengthStatus).toBe(5);
},
);

test('test ship hit to reduce length', ()=> {
  const builtShip = ship(5, 'Battleship', false);
  ship.hit;
  expect(builtShip.lengthStatus).toBe(4);
});

test('test ship sinking', ()=> {
  const builtShip = ship(5, 'Battleship', false);
  ship.hit;
  ship.hit;
  ship.hit;
  ship.hit;
  ship.hit;
  expect(builtShip.isSink).toBe(true);
});
