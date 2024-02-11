import Bowerman from "../js/class/bowerman";

test('Object properties Bowerman', () => {
  const bowerman = new Bowerman('Ilon', 'Bowerman');
  const correct = {
    name: 'Ilon',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }
  expect(bowerman).toEqual(correct);
});