import Magician from "../js/class/magician";

test('Object properties Magician', () => {
  const magician = new Magician('Гэндальф', 'Magician');
  const correct = {
    name: 'Гэндальф',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }
  expect(magician).toEqual(correct);
});

