import Daemon from "../js/class/daemon";

test('Object properties Daemon', () => {
  const response = new Daemon('Betrezen', 'Daemon');
  expect(response.name).toBe('Betrezen');
  expect(response.type).toBe('Daemon');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(10);
  expect(response.defence).toBe(40);
});
