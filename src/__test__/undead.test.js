import Undead from "../js/class/undead";

test('Object properties Undead', () => {
  const response = new Undead('Нежить', 'Undead');
  expect(response.name).toBe('Нежить');
  expect(response.type).toBe('Undead');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(25);
  expect(response.defence).toBe(25);
});