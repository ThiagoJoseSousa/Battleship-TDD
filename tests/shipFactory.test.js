const ship = require('../src/shipFactory');

test('test ship length', () => {
  const builtShip = ship(5, 'Battleship');
  expect(builtShip.lengthUpdate()).toBe(5);
},
);

test.skip('test ship hit to reduce length', ()=> {
  const builtShip = ship(5, 'Battleship');
  builtShip.hit();
  expect(builtShip.lengthUpdate()).toBe(4);
});

test.skip('test ship sinking', ()=> {
  const builtShip = ship(3, '2xShip');
  builtShip.hit();
  builtShip.hit();
  builtShip.hit();

  expect((builtShip.sinkChecker())).toBe(true);
});
