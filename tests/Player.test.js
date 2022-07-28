test('player can attack a coordinate', ()=> {
  player.attack(4, 4);
  expect(oppositeBoard[4][4]).toMatch('hit'||'miss');
});
