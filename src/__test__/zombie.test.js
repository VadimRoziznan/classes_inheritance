import Zombie from "../js/class/zombie";

test('Object properties Zombie', () => {
  const zombie = new Zombie('Зомби', 'Zombie');
  const correct = {
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }
  expect(zombie).toEqual(correct);
});