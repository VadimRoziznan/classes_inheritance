import Bowerman from "../js/class/bowerman";

test('Object properties Bowerman', () => {
  const response = new Bowerman('Ilon', 'Bowerman');
  expect(response.name).toBe('Ilon');
  expect(response.type).toBe('Bowerman');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(25);
  expect(response.defence).toBe(25);
});