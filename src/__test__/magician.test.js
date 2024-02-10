import Magician from "../js/class/magician";

test('Object properties Magician', () => {
  const response = new Magician('Гэндальф', 'Magician');
  expect(response.name).toBe('Гэндальф');
  expect(response.type).toBe('Magician');
  expect(response.health).toBe(100);
  expect(response.level).toBe(1);
  expect(response.attack).toBe(10);
  expect(response.defence).toBe(40);
});

