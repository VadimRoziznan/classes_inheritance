import Zombie from "../js/class/zombie";

test('Object properties Zombie', () => {
  const response = new Zombie('Зомби', 'Zombie');
  expect(response.name).toBe('Зомби');
  expect(response.type).toBe('Zombie');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(40);
  expect(response.defence).toBe(10);
});