import Undead from "../js/class/undead";

test('Object properties Undead', () => {
  const undead = new Undead('Нежить', 'Undead');
  const correct = {
    name: 'Нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(undead).toEqual(correct);
});