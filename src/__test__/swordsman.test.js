import Swordsman from "../js/class/swordsman";

test('Object properties Swordsman', () => {
  const swordsman = new Swordsman('Яна Егорян', 'Swordsman');
  const correct = {
    name: 'Яна Егорян',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(swordsman).toEqual(correct);
});