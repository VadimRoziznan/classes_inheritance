import Swordsman from "../js/class/swordsman";

test('Object properties Swordsman', () => {
  const response = new Swordsman('Яна Егорян', 'Swordsman');
  expect(response.name).toBe('Яна Егорян');
  expect(response.type).toBe('Swordsman');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(40);
  expect(response.defence).toBe(10);
});